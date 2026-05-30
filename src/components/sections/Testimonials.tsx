import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/site'
import { LuxuryCard } from '../ui/LuxuryCard'
import { Reveal } from '../ui/Reveal'
import { SectionAtmosphere } from '../layout/SectionAtmosphere'
import { SectionHeading } from '../ui/SectionHeading'

const STAGGER = 110
const SECTION_DELAY = 80

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-flow section-flow--on-dark section-lazy testimonials-atmosphere relative overflow-hidden py-28 text-ivory md:py-36 lg:py-40"
    >
      <SectionAtmosphere variant="navy-fade" position="both" />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-[38%] h-[min(90vw,560px)] w-[min(90vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/[0.08]" />
        <div className="absolute left-1/2 top-[42%] h-[min(70vw,400px)] w-[min(70vw,400px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/[0.05]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <SectionHeading
          theme="dark"
          revealDelay={SECTION_DELAY}
          label="Client Reflections"
          title="Trusted by Discerning Private Clients"
          subtitle="Confidential testimonials from individuals who value structured observation over spectacle."
        />

        <div className="grid gap-8 md:grid-cols-3 md:gap-9 lg:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} soft delay={240 + i * STAGGER}>
              <LuxuryCard
                as="blockquote"
                variant="glass-dark"
                className="flex h-full flex-col p-9 md:p-10 lg:p-11"
              >
                <Quote className="mb-6 h-7 w-7 text-gold/60" strokeWidth={1} />
                <p className="flex-1 font-serif text-lg leading-[1.85] text-ivory/[0.92] md:text-[1.2rem]">
                  <span className="text-gold/50">&ldquo;</span>
                  {t.quote}
                  <span className="text-gold/50">&rdquo;</span>
                </p>
                <footer className="mt-10 border-t border-gold/18 pt-7">
                  <cite className="not-italic">
                    <p className="text-sm font-medium tracking-wide text-gold-light">{t.author}</p>
                    <p className="mt-2 text-[11px] tracking-[0.14em] text-ivory/48 uppercase">
                      {t.role}
                    </p>
                  </cite>
                </footer>
              </LuxuryCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
