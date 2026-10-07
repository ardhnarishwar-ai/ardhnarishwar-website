import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../../data/site'

export function Services() {
  return (
    <section id="services" className="observatory-section observatory-services">
      <div className="observatory-container">
        <div className="observatory-section-intro">
          <div>
            <p className="observatory-eyebrow">PRIVATE CONSULTATIONS</p>
            <h2>Astromedical work,<br /><em>treated as observation.</em></h2>
          </div>
          <p>
            Each engagement is private, structured, and individual. The purpose is not
            spectacle or certainty, but a clearer view of the patterns being studied.
          </p>
        </div>

        <div className="observatory-service-list">
          {SERVICES.map((service, index) => (
            <a key={service.title} href="#contact" className="observatory-service-row">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ArrowUpRight size={18} strokeWidth={1.2} aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
