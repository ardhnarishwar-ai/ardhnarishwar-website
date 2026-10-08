import { useState, type FormEvent } from 'react'
import { ExternalLink, Send } from 'lucide-react'
import { InstagramIcon, WhatsAppIcon, GoogleBusinessIcon } from '../ui/SocialIcons'
import { LINKS } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

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
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    window.open(LINKS.consultationForm, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="editorial-section bg-[#f7f7f4]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <SectionHeading
          label="Private Inquiry"
          title="Begin with a conversation."
          subtitle="All engagements are handled with discretion. Start with a short inquiry and continue to the confidential intake form when you are ready."
        />

        <div className="mt-14 grid border-y border-navy/10 md:grid-cols-3 md:divide-x md:divide-navy/10">
          {contactCards.map((card) => {
            const Icon = card.icon
            return (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[190px] flex-col border-b border-navy/10 p-7 last:border-b-0 md:border-b-0 md:p-8"
              >
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.4} aria-hidden />
                <h3 className="mt-6 font-serif text-2xl text-navy">{card.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-navy/58">{card.description}</p>
                <span className="mt-auto pt-7 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-navy/55 transition-colors group-hover:text-gold">
                  {card.cta}
                  <ExternalLink size={13} aria-hidden />
                </span>
              </a>
            )
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-navy/10">
          <Reveal soft>
            <div className="border-b border-navy/10 py-10 lg:pr-14">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/45">Consultation inquiry</p>
              <h3 className="mt-4 font-serif text-3xl text-navy md:text-4xl">Tell us what you would like to understand.</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-navy/60">
                Share a little context below. You will then be directed to the confidential intake form where you can provide relevant background information and your area of inquiry.
              </p>

              <form onSubmit={handleSubmit} className="mt-9 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full Name" name="name" required placeholder="Your name" />
                  <FormField label="Email" name="email" type="email" required placeholder="you@email.com" />
                </div>
                <FormField label="Phone (optional)" name="phone" type="tel" placeholder="+91 ..." />
                <div>
                  <label htmlFor="concern" className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-navy/55">
                    What would you like guidance with?
                  </label>
                  <select id="concern" name="concern" required className="input-luxury w-full px-4 py-3.5 text-sm text-navy">
                    <option value="">Choose what you need help with</option>
                    <option>Health & Wellness</option>
                    <option>Money & Financial Concerns</option>
                    <option>Work & Career</option>
                    <option>Stress, Anxiety & Emotional Well-being</option>
                    <option>Relationships & Family</option>
                    <option>Life & Future Guidance</option>
                    <option>Personal Direction & Decisions</option>
                    <option>Something Else / Private Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-navy/55">
                    Brief Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share context for your consultation (optional)"
                    className="input-luxury w-full resize-none px-4 py-3.5 text-sm text-navy"
                  />
                </div>

                {submitted ? (
                  <p className="border-l-2 border-gold px-4 py-2 text-sm text-navy/65">
                    Thank you. Complete your confidential intake in the opened form.
                  </p>
                ) : null}

                <Button type="submit" icon={<Send size={17} />}>
                  Continue to Secure Form
                </Button>
              </form>
            </div>
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
      <label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-navy/55">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="input-luxury w-full px-4 py-3.5 text-sm text-navy"
      />
    </div>
  )
}
