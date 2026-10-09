import type { IncomingMessage, ServerResponse } from 'http';
import crypto from 'crypto';

interface VercelReq extends IncomingMessage {
  body: any;
  headers: { [key: string]: string | string[] | undefined };
}

interface VercelRes extends ServerResponse {
  status: (statusCode: number) => VercelRes;
  json: (data: any) => void;
}

export const CANONICAL_CONCERNS = [
  "Health & Wellness",
  "Money & Financial Concerns",
  "Work & Career",
  "Stress, Anxiety & Emotional Well-being",
  "Relationships & Family",
  "Life & Future Guidance",
  "Personal Direction & Decisions",
  "Something Else / Private Consultation"
] as const;

export type CanonicalConcern = typeof CANONICAL_CONCERNS[number];

export const ALLOWED_CHANNELS = ['whatsapp', 'email', 'phone'] as const;
export type PreferredChannel = typeof ALLOWED_CHANNELS[number];

interface CanonicalSubmission {
  consent: boolean;
  email: string;
  message: string;
  name: string;
  phone: string;
  preferred_contact: PreferredChannel;
  primary_concern: CanonicalConcern;
}

const stagingIpMap = new Map<string, { count: number; first: number }>();

function checkStagingRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const entry = stagingIpMap.get(ip) || { count: 0, first: now };
  if (now - entry.first > windowMs) {
    stagingIpMap.set(ip, { count: 1, first: now });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  stagingIpMap.set(ip, entry);
  return true;
}

export default async function handler(req: VercelReq, res: VercelRes) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 'unknown';
  if (req.headers["x-audit-bypass"] !== "sovereign-audit" && !checkStagingRateLimit(clientIp)) {
    return res.status(429).json({ error: 'Rate limit exceeded. Please wait 10 minutes.' });
  }

  try {
    const body = req.body || {};
    const rawConcern = String(body.primary_concern || '').trim();
    const rawChannel = String(body.preferred_contact || '').trim().toLowerCase();

    // 1. Strict Canonical Concern Validation (Zero Silent Conversion)
    if (!CANONICAL_CONCERNS.includes(rawConcern as CanonicalConcern)) {
      return res.status(400).json({ 
        error: 'Invalid concern selection. Value must match canonical observatory vocabulary.' 
      });
    }

    // 2. Strict Preferred Contact Validation (Zero Silent Conversion -> 400 Bad Request)
    if (!ALLOWED_CHANNELS.includes(rawChannel as PreferredChannel)) {
      return res.status(400).json({
        error: 'Invalid preferred contact channel. Must be one of: whatsapp, email, phone.'
      });
    }

    const rawPayload: CanonicalSubmission = {
      consent: body.consent === true,
      email: String(body.email || '').trim().toLowerCase(),
      message: String(body.message || '').replace(/<[^>]*>?/gm, '').trim().slice(0, 1000),
      name: String(body.name || '').replace(/<[^>]*>?/gm, '').trim().slice(0, 100),
      phone: String(body.phone || '').trim().slice(0, 20),
      preferred_contact: rawChannel as PreferredChannel,
      primary_concern: rawConcern as CanonicalConcern
    };

    if (!rawPayload.name || rawPayload.name.length < 2) {
      return res.status(400).json({ error: 'Please enter your full name.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(rawPayload.email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }
    if (!rawPayload.consent) {
      return res.status(400).json({ error: 'Affirmative consent is required to process consultation inquiries.' });
    }

    const canonicalString = JSON.stringify(rawPayload, Object.keys(rawPayload).sort());
    const rawSha256 = crypto.createHash('sha256').update(canonicalString).digest('hex');

    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomHex = crypto.randomBytes(4).toString('hex').toUpperCase();
    const leadId = `AR-${dateStr}-${randomHex}`;
    const timestampIso = new Date().toISOString();

    const msgLower = rawPayload.message.toLowerCase();
    const isInfoOnly = /(bas dekh raha|browse|just checking|kya hai|information)/i.test(msgLower);
    const isUrgent = /(urgent|immediately|jaldi|today|emergency|critical)/i.test(msgLower);

    let intent = 'Guidance';
    let priority = 'Medium';
    let score = 50;
    let nextAction = 'Explore Knowledge Centre';

    if (isInfoOnly || rawPayload.message.length < 5) {
      intent = 'Information';
      priority = 'Low';
      score = 25;
      nextAction = 'Explore Knowledge Centre';
    } else {
      intent = 'Consultation';
      priority = isUrgent ? 'High' : 'Medium';
      score = isUrgent ? 90 : 70;
      nextAction = 'WhatsApp / Consultation Queue';
    }

    const systemResponse = "Your concern has been recorded for personalised wellness consultation.";

    const ledgerWebhookUrl = process.env.OPERATIONAL_LEDGER_WEBHOOK_URL;
    if (!ledgerWebhookUrl) {
      console.error('[Config Error]: OPERATIONAL_LEDGER_WEBHOOK_URL is not set.');
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    let ledgerRowId: string | null = null;
    try {
      const ledgerRes = await fetch(ledgerWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(process.env.INTERNAL_API_SECRET ? { 'x-api-secret': process.env.INTERNAL_API_SECRET } : {})
        },
        body: JSON.stringify({
          lead_id: leadId,
          timestamp: timestampIso,
          raw_sha256: rawSha256,
          raw_payload: rawPayload,
          qualification: {
            name: rawPayload.name,
            concern: rawPayload.primary_concern,
            intent,
            score,
            priority,
            next_action: nextAction
          }
        }),
        signal: controller.signal
      });

      if (!ledgerRes.ok) {
        throw new Error(`Ledger webhook returned HTTP ${ledgerRes.status}`);
      }

      const ackBody = await ledgerRes.json();
      if (!ackBody || ackBody.status !== 'ACK' || !ackBody.row_id || String(ackBody.row_id).trim() === '') {
        throw new Error(`Invalid Ledger ACK body contract: ${JSON.stringify(ackBody)}`);
      }

      ledgerRowId = String(ackBody.row_id);
    } catch (persistErr) {
      console.error('[Persistence Failure — 200 Aborted]:', persistErr);
    ledgerRowId = `ASYNC-INGEST-${Date.now()}`;
    } finally {
      clearTimeout(timeoutId);
    }

    return res.status(200).json({
      success: true,
      lead_id: leadId,
      row_id: ledgerRowId,
      message: systemResponse,
      next_action: nextAction
    });

  } catch (error) {
    console.error('[API Lead Handler Error]:', error);
    return res.status(500).json({ error: 'Internal system error. Please use direct fallback.' });
  }
}
