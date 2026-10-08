import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { LINKS } from '../../data/site';

const CANONICAL_CONCERNS = [
  "Health & Wellness",
  "Money & Financial Concerns",
  "Work & Career",
  "Stress, Anxiety & Emotional Well-being",
  "Relationships & Family",
  "Life & Future Guidance",
  "Personal Direction & Decisions",
  "Something Else / Private Consultation"
];

const isServerlessEnabled = import.meta.env.VITE_USE_SERVERLESS_LEAD_QUALIFIER !== 'false';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    primary_concern: 'Health & Wellness',
    message: '',
    preferred_contact: 'whatsapp',
    consent: false
  });

  const [loading, setLoading] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<{ lead_id: string; message: string } | null>(null);
  const [fallbackActive, setFallbackActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.consent) {
      setErrorMsg('Affirmative consent is required to proceed with any consultation inquiry.');
      return;
    }

    if (!isServerlessEnabled || fallbackActive) {
      window.open(LINKS.consultationForm, '_blank', 'noopener,noreferrer');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/qualify-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Submission could not be recorded.');
      }

      setSubmittedLead({ lead_id: data.lead_id, message: data.message });
    } catch (err: any) {
      console.warn('[Lead Qualifier Failover Triggered]:', err);
      setFallbackActive(true);
      setErrorMsg('Direct connection timed out or could not be persisted. Please continue via our standard secure form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Direct Consultation"
          title="Begin with an Observation"
          subtitle="Share your context. Every pattern leaves a signature."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-stone-950/60 p-8 md:p-10 rounded-2xl border border-stone-800">
            {!submittedLead ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-400 font-mono mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-500/60"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-400 font-mono mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-500/60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-400 font-mono mb-2">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-500/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-400 font-mono mb-2">
                    Preferred Contact Channel
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['whatsapp', 'email', 'phone'].map((channel) => (
                      <button
                        type="button"
                        key={channel}
                        onClick={() => setFormData({ ...formData, preferred_contact: channel })}
                        className={`py-2 px-3 rounded-lg text-xs font-mono uppercase tracking-wider border transition-colors ${
                          formData.preferred_contact === channel
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                            : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700'
                        }`}
                      >
                        {channel}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-400 font-mono mb-2">
                    Primary Area of Concern *
                  </label>
                  <select
                    value={formData.primary_concern}
                    onChange={(e) => setFormData({ ...formData, primary_concern: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-500/60"
                  >
                    {CANONICAL_CONCERNS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-400 font-mono mb-2">
                    Brief Context / Timing (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any specific timing, recurring distress patterns, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-500/60 resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consentCheck"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 accent-amber-500 rounded bg-stone-900 border-stone-800"
                  />
                  <label htmlFor="consentCheck" className="text-xs text-stone-400 leading-relaxed">
                    I agree to be contacted for a complementary wellness perspective. (No medical diagnosis or treatment claims provided). *
                  </label>
                </div>

                {errorMsg && (
                  <div className="p-4 bg-amber-950/40 border border-amber-800/60 rounded-lg text-xs text-amber-200 space-y-2">
                    <p>{errorMsg}</p>
                    {formData.consent && (
                      <a
                        href={LINKS.consultationForm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-amber-400 hover:text-amber-300 font-mono uppercase tracking-wider text-[11px] underline"
                      >
                        Open Secure External Consultation Form &rarr;
                      </a>
                    )}
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    {loading ? 'Registering Context...' : 'Continue to Secure Observation'}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 space-y-5">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block">
                  Inquiry Registered
                </span>
                <h4 className="text-2xl font-serif text-stone-100">Context Received</h4>
                <div className="bg-stone-900 border border-stone-800 py-2 px-5 rounded-lg inline-block">
                  <span className="text-xs font-mono text-stone-300">
                    Reference ID: <strong className="text-amber-400">{submittedLead.lead_id}</strong>
                  </span>
                </div>
                <p className="text-sm text-stone-400 max-w-md mx-auto leading-relaxed">
                  {submittedLead.message}
                </p>
                <p className="text-xs text-stone-500 italic max-w-sm mx-auto">
                  Note: Ardhnarishwar Observatory provides constitutional observation and planetary timing, not medical diagnosis or treatment.
                </p>
                <button
                  onClick={() => {
                    setSubmittedLead(null);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      primary_concern: 'Health & Wellness',
                      message: '',
                      preferred_contact: 'whatsapp',
                      consent: false
                    });
                  }}
                  className="mt-4 text-xs font-mono text-stone-400 hover:text-stone-200 underline block mx-auto"
                >
                  Submit another inquiry
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <div className="bg-stone-950/40 p-8 rounded-2xl border border-stone-800 space-y-4">
                <h4 className="font-serif text-lg text-stone-200">The Observatory Protocol</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  All consultations operate under strict confidentiality. We do not provide quick generalizations; inquiries are cross-referenced against biological timing cycles and constitutional patterns.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="space-y-4">
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-stone-950/40 hover:bg-stone-900 border border-stone-800 rounded-xl text-xs font-mono text-stone-300 transition-colors"
                >
                  <span>Direct Concierge (WhatsApp)</span>
                  <span className="text-amber-400">&rarr;</span>
                </a>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-stone-950/40 hover:bg-stone-900 border border-stone-800 rounded-xl text-xs font-mono text-stone-300 transition-colors"
                >
                  <span>Observatory Archives (Instagram)</span>
                  <span className="text-amber-400">&rarr;</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
