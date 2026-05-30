import { useState, type FormEvent } from 'react'
import { MapPin, MessageCircle, ExternalLink, Send } from 'lucide-react'
import { InstagramIcon } from '../ui/SocialIcons'
import { LINKS } from '../../data/site'
import { IconBadge } from '../ui/IconBadge'
import { LuxuryCard } from '../ui/LuxuryCard'
import { Reveal } from '../ui/Reveal'
import { SectionAtmosphere } from '../layout/SectionAtmosphere'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { FormEmbed } from './FormEmbed'

const contactCards = [
  {
    title: 'WhatsApp',
    description: 'Direct private message for consultation inquiries.',
    href: LINKS.whatsapp,
    icon: MessageCircle,
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
    icon: MapPin,
    cta: 'View Profile',
  },
]

const CARD_STAGGER = 85
const SECTION_DELAY = 100

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    window.open(LINKS.consultationForm, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="section-flow section-lazy relative bg-ivory-deep/40 py-28 md:py-36 lg:py-40">
      <SectionAtmosphere variant="warm" position="top" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <SectionHeading
          revealDelay={SECTION_DELAY}
          label="Private Inquiry"
          title="Begin Your Consultation"
          subtitle="All engagements are confidential. Complete the secure intake form or reach out directly."
        />

        <div className="mb-16 grid gap-7 md:grid-cols-3 md:gap-8">
          {contactCards.map((card, i) => (
            <Reveal key={card.title} soft delay={260 + i * CARD_STAGGER}>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-luxury card-luxury--ivory group flex h-full min-h-[220px] flex-col p-8 md:p-9"
              >
                <IconBadge icon={card.icon} className="mb-6" />
                <h3 className="font-serif text-xl text-navy md:text-[1.35rem]">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-[1.7] text-navy/58">{card.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gold transition-colors duration-500 group-hover:text-gold-dark">
                  {card.cta}
                  <ExternalLink size={14} className="opacity-80" />
                </span>
                <div className="card-accent-line mt-5" aria-hidden />
              </a>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal soft delay={520}>
            <LuxuryCard variant="ivory" className="p-8 md:p-10 lg:p-11">
              <h3 className="font-serif text-2xl text-navy md:text-3xl">Consultation Inquiry</h3>
              <p className="mt-4 text-sm leading-[1.75] text-navy/62">
                Submit your details below. You will be directed to our secure Google Form to
                complete birth data and consultation preferences.
              </p>

              <form onSubmit={handleSubmit} className="mt-9 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full Name" name="name" required placeholder="Your name" />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                  />
                </div>
                <FormField label="Phone (optional)" name="phone" type="tel" placeholder="+91 ..." />
                <div>
                  <label
                    htmlFor="concern"
                    className="mb-2 block text-xs font-medium tracking-[0.16em] text-navy/65 uppercase"
                  >
                    Primary Concern
                  </label>
                  <select
                    id="concern"
                    name="concern"
                    required
                    className="input-luxury w-full rounded-xl px-4 py-3.5 text-sm text-navy"
                  >
                    <option value="">Select consultation type</option>
                    <option>Medical Astrology Consultation</option>
                    <option>Relationship Pattern Reading</option>
                    <option>Career & Life Direction</option>
                    <option>Psychological Pattern Analysis</option>
                    <option>Planetary Timing Guidance</option>
                    <option>Wellness Observation Report</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium tracking-[0.16em] text-navy/65 uppercase"
                  >
                    Brief Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share context for your consultation (optional)"
                    className="input-luxury w-full resize-none rounded-xl px-4 py-3.5 text-sm text-navy"
                  />
                </div>

                {submitted ? (
                  <p className="rounded-xl border border-gold/28 bg-gold/[0.07] px-4 py-3.5 text-sm text-navy/75">
                    Thank you. Complete your secure intake in the opened form window.
                  </p>
                ) : null}

                <Button type="submit" icon={<Send size={18} />}>
                  Continue to Secure Form
                </Button>
              </form>
            </LuxuryCard>
          </Reveal>

          <Reveal soft delay={600}>
            <LuxuryCard
              variant="ivory"
              className="flex h-full flex-col overflow-hidden p-0"
              as="div"
            >
              <div className="border-b border-gold/14 bg-navy px-7 py-6 md:px-8">
                <p className="text-xs font-medium tracking-[0.22em] text-gold uppercase">
                  Secure Intake
                </p>
                <p className="mt-1.5 font-serif text-xl text-ivory md:text-2xl">
                  Official Consultation Form
                </p>
              </div>
              <FormEmbed />
            </LuxuryCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FormField({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium tracking-[0.16em] text-navy/65 uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="input-luxury w-full rounded-xl px-4 py-3.5 text-sm text-navy"
      />
    </div>
  )
}
