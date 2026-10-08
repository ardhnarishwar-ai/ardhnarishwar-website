import { useEffect, useState } from 'react'
import { LINKS } from '../../data/site'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Method', href: '#process', id: 'process' },
  { label: 'Founder', href: '#raja', id: 'raja' },
  { label: 'Knowledge', href: '#knowledge', id: 'knowledge' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const ids = ['hero', ...NAV.map((item) => item.id)]
    const onScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 12)

      const marker = scrollY + 180
      let current = 'hero'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= marker) current = id
      }
      setActiveSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`observatory-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="observatory-header-inner" style={{ position: 'relative' }}>
        <a
          href="/"
          className="observatory-brand"
          aria-label="ardhnarishwar.in"
        >
          <img
            src="/images/ardhnarishwar-logo-header-uhd.png"
            alt="ardhnarishwar.in — Astromedical Solutions"
            width={220}
            height={44}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </a>

        <nav className="observatory-nav" aria-label="Main">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={activeSection === item.id ? 'active' : ''}>
              {item.label}
            </a>
          ))}
          <a className="observatory-nav-cta" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">Private consultation</a>
        </nav>

        <button
          type="button"
          className="observatory-menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={25} strokeWidth={1.5} /> : <Menu size={25} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="observatory-mobile-nav">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mobile-cta">Private consultation</a>
        </div>
      )}
    </header>
  )
}
