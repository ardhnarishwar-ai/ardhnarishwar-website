import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'

const NAV = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Method', href: '#process', id: 'process' },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { label: 'S. Raja', href: '#raja', id: 'raja' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const

const SECTION_IDS = NAV.map((n) => n.id)

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [deepScrolled, setDeepScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > 16)
        setDeepScrolled(y > 280)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navGlassClass = scrolled
    ? `nav-glass ${deepScrolled ? 'nav-glass--deep' : ''}`
    : 'bg-transparent border-b border-transparent'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${navGlassClass}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:py-5">
        <a href="#" className="lift-subtle group flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt={`${BRAND.fullName} logo`}
            className="h-11 w-11 object-contain transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] md:h-12 md:w-12"
            width={48}
            height={48}
          />
          <div className="hidden sm:block">
            <p className="font-serif text-lg leading-none tracking-wide text-gold md:text-xl">
              {BRAND.name.toUpperCase()}
            </p>
            <p className="mt-0.5 text-[10px] font-medium tracking-[0.2em] text-navy/60 uppercase">
              {BRAND.tagline}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="nav-link-glow" aria-hidden />
                {item.label}
                <span className="nav-link-indicator" aria-hidden />
              </a>
            )
          })}
          <a
            href="#contact"
            className="btn-luxury btn-luxury-primary lift-cta ml-1 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium tracking-[0.04em] text-white shadow-luxury border border-gold-dark/30"
          >
            Book Consultation
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-navy transition-colors duration-300 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`nav-mobile-panel border-t border-gold/10 lg:hidden ${open ? 'nav-mobile-panel--open nav-glass' : ''}`}
        aria-hidden={!open}
      >
        <div>
          <nav className="flex flex-col gap-0.5 px-5 py-6" aria-label="Mobile">
            {NAV.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? 'nav-mobile-link--active text-gold'
                      : 'text-navy/80 hover:bg-gold/8 hover:text-gold'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </a>
              )
            })}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-luxury btn-luxury-primary mt-4 rounded-full bg-gradient-gold py-3.5 text-center text-sm font-medium text-white shadow-luxury border border-gold-dark/30"
            >
              Book Private Consultation
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
