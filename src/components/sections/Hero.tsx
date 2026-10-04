import { Calendar, ArrowRight } from 'lucide-react'
import { LINKS } from '../../data/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function Hero() {
  return (
    <section id="hero" className="editorial-hero relative overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-5 pb-20 pt-32 md:px-8 md:pt-36 lg:grid-cols-[1.02fr_.98fr] lg:gap-20 lg:px-10 lg:pb-24">
        <div className="order-2 lg:order-1">
          <Reveal immediate delay={60}>
            <p className="editorial-kicker">ARDHNARISHWAR OBSERVATORY</p>
          </Reveal>

          <Reveal immediate delay={140}>
            <h1 className="editorial-hero-title mt-6">
              Understanding the person
              <span>behind the pattern.</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={220}>
            <p className="editorial-hero-copy mt-7 max-w-xl">
              A research-oriented practice exploring constitutional patterns,
              planetary timing, behaviour, and human wellness through structured
              observation.
            </p>
          </Reveal>

          <Reveal immediate delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                href={LINKS.consultationForm}
                icon={<Calendar size={17} strokeWidth={1.5} />}
              >
                Private Consultation
              </Button>
              <a href="#process" className="editorial-text-link">
                Explore the method <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>

          <Reveal immediate delay={380}>
            <div className="editorial-hero-meta mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-7 border-t border-navy/10 pt-8 sm:grid-cols-4">
              {['Research-led', 'Private', 'Structured', 'Individual'].map((item) => (
                <div key={item}>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-navy/45">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={100} className="order-1 lg:order-2">
          <div className="editorial-hero-media editorial-hero-portrait">
            <img
              src="/images/hero-reference.png"
              alt="Ardhnarishwar founder and observatory portrait"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <p className="mt-4 text-right text-[10px] uppercase tracking-[0.18em] text-navy/38">
            Founder · Observer · Pattern Intelligence
          </p>
        </Reveal>
      </div>
    </section>
  )
}
