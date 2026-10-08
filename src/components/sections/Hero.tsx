import { ArrowDownRight, Calendar } from 'lucide-react'
import { LINKS } from '../../data/site'
import { Reveal } from '../ui/Reveal'

export function Hero() {
  return (
    <section id="hero" className="observatory-hero">
      <div className="observatory-hero-cover" aria-hidden="true" />
      <div className="observatory-hero-inner">
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
              A private, research-oriented wellness observatory offering complementary
              guidance around health, money, career, relationships, emotional well-being,
              and important life decisions.
            </p>
            <p className="mt-5 max-w-2xl text-[10px] font-semibold uppercase tracking-[0.16em] text-navy/55">
              Health & Wellness · Money · Career · Relationships · Emotional Well-being · Life Decisions
            </p>
          </Reveal>

          <Reveal immediate delay={260}>
            <div className="observatory-hero-actions">
              <a className="observatory-button observatory-button-dark" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
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
              <a href="#concerns">01 / YOUR CONCERN</a>
              <a href="#process">02 / OBSERVATION</a>
              <a href="#timeline">03 / TIMING</a>
              <a href="#purpose">04 / CONTEXT</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
