import type { ReactNode } from 'react'
import { MessageCircle, MapPin } from 'lucide-react'
import { InstagramIcon } from '../ui/SocialIcons'
import { BRAND, BUSINESS, LINKS } from '../../data/site'
import { SectionAtmosphere } from './SectionAtmosphere'

const FOOTER_NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'S. Raja', href: '#raja' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-prestige relative overflow-hidden border-t border-gold/20 text-ivory">
      <SectionAtmosphere variant="navy-fade" position="top" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
        <div className="footer-separator mb-16 md:mb-20" aria-hidden />

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-5">
              <img
                src="/images/logo.png"
                alt=""
                className="h-16 w-16 object-contain brightness-110"
                width={64}
                height={64}
              />
              <div>
                <p className="font-serif text-2xl tracking-wide text-gold-light md:text-[1.65rem]">
                  {BRAND.name}
                </p>
                <p className="mt-1 text-[10px] font-medium tracking-[0.22em] text-ivory/55 uppercase">
                  {BRAND.tagline}
                </p>
              </div>
            </div>
            <p className="mt-8 max-w-md text-sm leading-[1.85] text-ivory/62 md:text-[0.95rem]">
              Private clinical-style medical astrology consulting—where ancient observation meets
              structured wellness intelligence. Research-oriented. Confidential. Transformational.
            </p>
            <p className="mt-8 font-serif text-lg italic tracking-wide text-gold/80">
              Private consultations by appointment only.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="mb-5 text-[10px] font-medium tracking-[0.26em] text-gold uppercase">
              Connect
            </p>
            <div className="flex gap-3">
              <SocialIcon
                href={LINKS.whatsapp}
                label="WhatsApp"
                icon={<MessageCircle size={20} strokeWidth={1.25} />}
              />
              <SocialIcon
                href={LINKS.instagram}
                label="Instagram"
                icon={<InstagramIcon width={20} height={20} />}
              />
              <SocialIcon
                href={LINKS.googleBusiness}
                label="Google Business"
                icon={<MapPin size={20} strokeWidth={1.25} />}
              />
            </div>
            <ul className="mt-8 space-y-2 text-xs text-ivory/48">
              <li>
                <a href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, '')}`} className="footer-link">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="footer-link">
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={LINKS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Google Maps
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-5 text-[10px] font-medium tracking-[0.26em] text-gold uppercase">
              Navigate
            </p>
            <ul className="space-y-3">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="footer-link text-sm text-ivory/58">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-separator mt-16 mb-8 md:mt-20" aria-hidden />

        <div className="flex flex-col items-center justify-between gap-5 text-center text-[11px] tracking-wide text-ivory/42 sm:flex-row sm:text-left">
          <p>© {year} {BRAND.fullName}. All rights reserved.</p>
          <p className="max-w-sm leading-relaxed sm:text-right">
            Clinical Medical Astrology · Structured Pattern Analysis · Worldwide Private Practice
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="footer-social flex h-12 w-12 items-center justify-center rounded-full border border-gold/28 text-gold-light hover:border-gold/50 hover:bg-gold/12 hover:text-ivory"
    >
      {icon}
    </a>
  )
}
