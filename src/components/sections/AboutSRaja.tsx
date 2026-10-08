import { ArrowUpRight } from 'lucide-react'
import { LINKS } from '../../data/site'

export function AboutSRaja() {
  return (
    <section id="raja" className="observatory-section observatory-founder">
      <div className="observatory-container">
        <div className="observatory-founder-grid">
          <div className="observatory-founder-note">
            <p className="observatory-eyebrow">THE OBSERVER</p>
            <div className="observatory-founder-logo"><img src="/images/ardhnarishwar-logo.jpg" alt="ardhnarishwar.in — Astromedical Solutions" /></div>
            <span>ARDHNARISHWAR OBSERVATORY</span>
            <div className="observatory-founder-rule" />
            <div className="observatory-founder-index">
              <p>Observation before interpretation</p>
              <p>Constitution before symptom</p>
              <p>Timing within context</p>
              <p>Research before certainty</p>
            </div>
          </div>

          <div className="observatory-founder-copy">
            <h2>S. Raja</h2>
            <p className="observatory-founder-role">Founder & Research Director · Ardhnarishwar Observatory</p>

            <blockquote>
              “My work is not to predict events.
              <br />
              My work is to observe the constitutional patterns from which events emerge.”
            </blockquote>

            <p>
              Ardhnarishwar began with a question: why can people with apparently similar
              symptoms, circumstances, or challenges experience such different outcomes?
              Years of observation led the work away from isolated symptoms and toward
              recurring signatures.
            </p>
            <p>
              Today the observatory brings those observations into a structured, private
              framework for constitutional study, planetary timing, and pattern intelligence.
            </p>

            <a className="observatory-inline-link" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              Request a private consultation <ArrowUpRight size={16} strokeWidth={1.3} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
