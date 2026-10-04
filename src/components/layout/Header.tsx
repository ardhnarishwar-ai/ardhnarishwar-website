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
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-500 ease-out ${navGlassClass}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:py-5">
        <a href="#" className="group flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt={`${BRAND.fullName} logo`}
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-[1.02] md:h-11 md:w-11"
            width={44}
            height={44}
          />
          <div className="hidden sm:block">
            <p className="font-serif text-lg leading-none tracking-wide text-navy md:text-xl">
              {BRAND.name.toUpperCase()}
            </p>
            <p className="mt-1 text-[9px] font-medium tracking-[0.18em] text-navy/50 uppercase">
              {BRAND.tagline}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
                <span className="nav-link-indicator" aria-hidden />
              </a>
            )
          })}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center border border-navy bg-navy px-5 py-2.5 text-sm font-medium tracking-[0.03em] text-white transition-colors duration-300 hover:bg-[#16213a]"
          >
            Book Consultation
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-navy transition-colors duration-200 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`nav-mobile-panel border-t border-navy/10 lg:hidden ${open ? 'nav-mobile-panel--open nav-glass' : ''}`}
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
                  className={`border-b border-navy/8 px-2 py-3.5 text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-gold' : 'text-navy/80 hover:text-gold'
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
              className="mt-5 border border-navy bg-navy py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#16213a]"
            >
              Book Private Consultation
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
