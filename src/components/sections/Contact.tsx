import { useState, type FormEvent } from 'react';
import { ExternalLink, Send } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon, GoogleBusinessIcon } from '../ui/SocialIcons';
import { LINKS } from '../../data/site';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

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

const contactCards = [
  {
    title: 'WhatsApp',
    description: 'Direct private message for consultation inquiries.',
    href: LINKS.whatsapp,
    icon: WhatsAppIcon,
    cta: 'Message on WhatsApp',
  },
  {
    title: 'Instagram',
    description: 'Insights, observations, and practice updates.',
    href: LINKS.instagram,
    icon: InstagramIcon,
    cta: 'Follow on Instagram',
  },
  {
    title: 'Google Business',
    description: 'Verified location and business profile.',
    href: LINKS.googleBusiness,
    icon: GoogleBusinessIcon,
    cta: 'View Profile',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    primary_concern: 'Health & Wellness',
    message: '',
    preferred_contact: 'whatsapp',
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<{ lead_id: string; message: string } | null>(null);
  const [fallbackActive, setFallbackActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        body: JSON.stringify(formData),
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
    <section id="contact" className="section-padding bg-ivory">
      <div className="section-container">
        <SectionHeading
          label="Private Inquiry"
          title="Begin with a conversation."
          subtitle="Whether you seek guidance on a health pattern, a life transition, or an institutional inquiry, every consultation begins with attentive observation."
          align="center"
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-start">
          {/* Main Form Container */}
          <Reveal className="lg:col-span-7">
            <div className="card-luxury p-8 sm:p-10">
              {!submittedLead ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-navy/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-luxury w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-navy/70 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-luxury w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-navy/70 mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+91..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-luxury w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-navy/70 mb-2">
                      Preferred Contact Channel
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['whatsapp', 'email', 'phone'] as const).map((channel) => (
                        <button
                          type="button"
                          key={channel}
                          onClick={() => setFormData({ ...formData, preferred_contact: channel })}
                          className={`py-2 px-3 rounded-lg text-xs font-mono uppercase tracking-wider border transition-colors ${
                            formData.preferred_contact === channel
                              ? 'bg-gold/15 border-gold text-navy font-semibold'
                              : 'bg-ivory/30 border-stone-200 text-stone-500 hover:border-stone-300'
                          }`}
                        >
                          {channel}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-navy/70 mb-2">
                      What would you like guidance with? *
                    </label>
                    <select
                      value={formData.primary_concern}
                      onChange={(e) => setFormData({ ...formData, primary_concern: e.target.value })}
                      className="input-luxury w-full"
                    >
                      {CANONICAL_CONCERNS.map((concern) => (
                        <option key={concern} value={concern}>
                          {concern}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-navy/70 mb-2">
                      Brief Context / Timing (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share context for your consultation..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-luxury w-full resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="consentCheck"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 accent-gold rounded border-stone-300"
                    />
                    <label htmlFor="consentCheck" className="text-xs text-stone-600 leading-relaxed">
                      I agree to be contacted for a complementary wellness perspective. (No medical diagnosis or treatment claims provided). *
                    </label>
                  </div>

                  {errorMsg && (
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 space-y-2">
                      <p>{errorMsg}</p>
                      {formData.consent && (
                        <a
                          href={LINKS.consultationForm}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-gold hover:underline font-mono uppercase tracking-wider text-[11px]"
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
                      {loading ? 'Registering Context...' : 'Continue to Secure Form'}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10 space-y-5">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold block">
                    Inquiry Registered
                  </span>
                  <h4 className="text-2xl font-serif text-navy">Context Received</h4>
                  <div className="bg-ivory border border-stone-200 py-2 px-5 rounded-lg inline-block">
                    <span className="text-xs font-mono text-navy/80">
                      Reference ID: <strong className="text-navy">{submittedLead.lead_id}</strong>
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
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
                        consent: false,
                      });
                    }}
                    className="mt-4 text-xs font-mono text-stone-500 hover:text-navy underline block mx-auto"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}
            </div>
          </Reveal>

          {/* Original Contact Cards Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={index * 100}>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-luxury p-6 block group hover:border-gold/40 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-2.5 rounded-lg bg-ivory text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif text-navy group-hover:text-gold transition-colors duration-300">
                            {card.title}
                          </h4>
                          <p className="text-xs text-navy/60 mt-1">
                            {card.description}
                          </p>
                          <span className="inline-flex items-center text-xs font-mono text-gold mt-3 group-hover:underline">
                            {card.cta}
                            <ExternalLink className="w-3 h-3 ml-1.5 opacity-70 group-hover:opacity-100" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
