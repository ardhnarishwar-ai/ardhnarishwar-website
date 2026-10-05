import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND } from '../../data/site'

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

  useEffect(() => {
    const ids = ['hero', ...NAV.map((item) => item.id)]
    const onScroll = () => {
      const marker = window.scrollY + 180
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
    <header className="observatory-header">
      <div className="observatory-header-inner">
        <a href="#hero" className="observatory-brand">
          <img src="/images/logo.png" alt="" />
          <span>
            <strong>{BRAND.name.toUpperCase()}</strong>
            <small>{BRAND.tagline}</small>
          </span>
        </a>

        <nav className="observatory-nav" aria-label="Main">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={activeSection === item.id ? 'active' : ''}>
              {item.label}
            </a>
          ))}
          <a className="observatory-nav-cta" href="#contact">Private consultation</a>
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
