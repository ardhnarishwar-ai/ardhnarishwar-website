import type { ReactNode } from 'react'
import { MessageCircle, MapPin } from 'lucide-react'
import { InstagramIcon } from '../ui/SocialIcons'
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
              <img
                src="/images/ardhnarishwar-logo.jpg"
                alt="ardhnarishwar.in — Astromedical Solutions"
                className="h-auto w-[300px] max-w-full object-contain"
              />
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
            <div className="mt-5 flex gap-3">
              <SocialIcon href={LINKS.whatsapp} label="WhatsApp" tone="whatsapp" icon={<MessageCircle size={19} strokeWidth={1.25} />} />
              <SocialIcon href={LINKS.instagram} label="Instagram" tone="instagram" icon={<InstagramIcon width={19} height={19} />} />
              <SocialIcon href={LINKS.googleBusiness} label="Google Business" icon={<MapPin size={19} strokeWidth={1.25} />} />
            </div>
            <div className="mt-6 space-y-2 text-xs text-navy/45">
              <a href={`tel:${BUSINESS.phone.replace(/[^\\d+]/g, '')}`} className="block hover:text-gold">{BUSINESS.phone}</a>
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

function SocialIcon({ href, label, icon, tone }: { href: string; label: string; icon: ReactNode; tone?: 'whatsapp' | 'instagram' }) {
  const toneClass = tone === 'whatsapp' ? 'text-[#25D366]' : tone === 'instagram' ? 'text-[#E4405F]' : 'text-navy/55'
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-navy/12 ${toneClass} transition-colors hover:border-gold/45`}>
      {icon}
    </a>
  )
}
