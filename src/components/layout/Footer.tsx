import type { ReactNode } from 'react'
import { InstagramIcon, WhatsAppIcon, ChromeIcon, GmailIcon, GoogleFormsIcon, PhoneIcon } from '../ui/SocialIcons'
import { BRAND, BUSINESS, LINKS } from '../../data/site'

const FOOTER_NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Method', href: '#process' },
  { label: 'Knowledge', href: '#knowledge' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="editorial-footer border-t border-navy/10 bg-white text-navy">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div>
              <img src="/images/ardhnarishwar-logo.jpg" alt="ardhnarishwar.in — Astromedical Solutions" className="h-auto w-[300px] max-w-full object-contain" />
            </div>
            <p className="mt-7 max-w-lg text-sm leading-7 text-navy/58">
              A research-oriented observatory focused on constitutional observation,
              pattern intelligence, planetary timing, and private one-to-one work.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <p className="editorial-footer-label">Navigate</p>
            <ul className="mt-5 space-y-3">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}><a href={item.href} className="text-sm text-navy/58 transition-colors hover:text-gold">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="editorial-footer-label">Connect</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <SocialIcon href={LINKS.whatsapp} label="WhatsApp" icon={<WhatsAppIcon width={20} height={20} />} />
              <SocialIcon href={LINKS.instagram} label="Instagram" icon={<InstagramIcon width={20} height={20} />} />
              <SocialIcon href={LINKS.consultationForm} label="Consultation Form" icon={<GoogleFormsIcon width={20} height={20} />} />
              <SocialIcon href={LINKS.googleBusiness} label="Google Business" icon={<ChromeIcon width={20} height={20} />} />
            </div>

            <a href={LINKS.googleBusiness} target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile"
              className="mt-6 flex items-center gap-3 text-sm text-navy/60 transition-colors hover:text-gold">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="/images/What-is-Google-My-Business-1107x1536.png"
                  alt="Google Business Profile"
                  className="h-10 w-10 object-contain"
                />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-[0.16em] text-navy/40">Find us on</span>
                <span className="block mt-0.5 font-medium text-navy/70">Google Business Profile</span>
              </span>
            </a>

            <div className="mt-6 space-y-3 text-xs text-navy/45">
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold">
                <WhatsAppIcon width={18} height={18} /><span>WhatsApp · +91-9111855115</span>
              </a>
              <a href={`tel:${BUSINESS.phone.replace(/[^\\d+]/g, '')}`} className="flex items-center gap-2 hover:text-gold">
                <PhoneIcon width={18} height={18} /><span>Call · {BUSINESS.phone}</span>
              </a>
              <a href="mailto:ardhnarishwar.in@gmail.com" className="flex items-center gap-2 hover:text-gold">
                <GmailIcon width={18} height={18} /><span>ardhnarishwar.in@gmail.com</span>
              </a>
              <a href="mailto:ardhnarishwar.astro@gmail.com" className="flex items-center gap-2 hover:text-gold">
                <GmailIcon width={18} height={18} /><span>ardhnarishwar.astro@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-navy/10 pt-6 text-[10px] uppercase tracking-[0.12em] text-navy/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {BRAND.fullName}. All rights reserved.</p>
          <p>Private practice · Research-oriented · Confidential</p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/12 bg-white transition-all hover:border-gold/45 hover:shadow-sm">
      {icon}
    </a>
  )
}
