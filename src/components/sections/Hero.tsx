import { ArrowDownRight, Calendar } from 'lucide-react'
import { LINKS } from '../../data/site'
import { Reveal } from '../ui/Reveal'

export function Hero() {
  return (
    <section id="hero" className="observatory-hero">
      <div className="observatory-hero-inner">
        <Reveal immediate delay={120} className="observatory-hero-visual">
          <img
            src="/images/hero-observatory.svg"
            alt="Ardhanarishwar-inspired observatory landscape with the five elements, Himalayan lake, and celestial geometry"
            className="observatory-hero-visual-image"
          />
        </Reveal>

        <div className="observatory-hero-copy">
          <Reveal immediate>
            <p className="observatory-eyebrow">ARDHNARISHWAR OBSERVATORY · EST. 2012</p>
          </Reveal>

          <Reveal immediate delay={100}>
            <h1>
              Every symptom
              <span>has a pattern.</span>
              <span>Every pattern</span>
              <span>leaves a signature.</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={180}>
            <p className="observatory-hero-lead">
              A research-oriented observatory studying constitutional patterns,
              planetary timing, behaviour, and human experience through disciplined
              observation.
            </p>
          </Reveal>

          <Reveal immediate delay={260}>
            <div className="observatory-hero-actions">
              <a className="observatory-button observatory-button-dark" href={LINKS.consultationForm}>
                <Calendar size={16} strokeWidth={1.5} />
                Private consultation
              </a>
              <a className="observatory-button observatory-button-text" href="#process">
                Explore the method <ArrowDownRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>

          <Reveal immediate delay={340}>
            <div className="observatory-index">
              <span>01 / OBSERVATION</span>
              <span>02 / CONSTITUTION</span>
              <span>03 / TIMING</span>
              <span>04 / CONTEXT</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
