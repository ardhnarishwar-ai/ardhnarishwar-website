import {
  Calendar,
  CircleDot,
  Lock,
  Microscope,
  ArrowRight,
  Flower2,
  Target,
} from 'lucide-react'
import { BRAND, HERO_PILLARS, LINKS } from '../../data/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SacredGeometryBackground } from '../layout/SacredGeometryBackground'
import { SectionAtmosphere } from '../layout/SectionAtmosphere'
import heroImage from '../../assets/hero.png'

const pillarIcons = {
  microscope: Microscope,
  lock: Lock,
  target: Target,
  lotus: Flower2,
}

export function Hero() {
  return (
    <section
      id="hero"
      className="section-flow section-flow--hero relative min-h-[100dvh] overflow-hidden pt-28 pb-24 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32"
    >
      <SacredGeometryBackground />
      <SectionAtmosphere variant="warm" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <Reveal immediate delay={0}>
          <div className="mb-10 hidden flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium tracking-[0.22em] text-gold/90 uppercase sm:flex md:mb-14">
            {BRAND.values.map((v, i) => (
              <span key={v} className="flex items-center gap-3">
                {i > 0 && <span className="text-gold/30" aria-hidden>◆</span>}
                {v}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <Reveal immediate delay={120} className="relative order-2 lg:order-1">
            <div className="relative mx-auto aspect-[4/5] max-w-lg lg:mx-0">
              <div
                className="pointer-events-none absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-gold/8 via-transparent to-navy/[0.03] opacity-80"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl shadow-luxury-lg">
                
                 <img
                 src={heroImage}
                 alt="Ardhnarishwar Astromedical Solutions"
                 className="w-full h-auto object-cover rounded-2xl"
                 loading="eager"
               />
                
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/25"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/10 to-transparent"
                  aria-hidden
                />
              </div>
              <div
                className="pointer-events-none absolute -bottom-8 -right-4 h-36 w-36 rounded-full bg-gold/[0.07] blur-3xl"
                aria-hidden
              />
            </div>
          </Reveal>

          <div className="relative order-1 lg:order-2">
            <div
              className="hero-accent-line pointer-events-none absolute -left-4 top-8 hidden h-32 w-px lg:block"
              aria-hidden
            />

            <Reveal immediate delay={80}>
              <div className="mb-6 flex items-center gap-3 md:mb-8">
                <span className="hero-label-rule h-px w-12 shrink-0" aria-hidden />
                <p className="text-[11px] font-medium tracking-[0.32em] text-gold uppercase">
                  Clinical Medical Astrology
                </p>
                <span className="text-[9px] text-gold/70" aria-hidden>
                  ◆
                </span>
              </div>
            </Reveal>

            <Reveal immediate delay={160}>
              <h1 className="hero-title font-serif text-[2.35rem] leading-[1.04] text-navy sm:text-[2.65rem] md:text-[3.25rem] lg:text-[3.55rem] xl:text-[3.85rem]">
                <span className="hero-title-line">Decode The Pattern</span>
                <span className="hero-title-line hero-title-line--accent">Behind Your Imbalance</span>
              </h1>
            </Reveal>

            <Reveal immediate delay={240}>
              <p className="hero-subtitle type-body-calm mt-7 text-[1.05rem] text-navy/66 md:mt-9 md:text-lg">
                Root-cause oriented astrological guidance integrating planetary timing, wellness
                intelligence, and structured observation.
              </p>
            </Reveal>

            <Reveal immediate delay={320}>
              <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap md:mt-14">
                <Button
                  href={LINKS.consultationForm}
                  icon={
                    <>
                      <Calendar size={18} strokeWidth={1.5} />
                      <ArrowRight size={16} className="opacity-90" />
                    </>
                  }
                >
                  Book Private Consultation
                </Button>
                <Button
                  href="#process"
                  variant="outline"
                  icon={<CircleDot size={18} strokeWidth={1.5} />}
                >
                  Explore The Method
                </Button>
              </div>
            </Reveal>

            <Reveal immediate delay={400}>
              <div className="hero-pillar-grid mt-14 grid grid-cols-2 gap-8 border-t border-gold/12 pt-12 sm:grid-cols-4 md:mt-16 md:pt-14">
                {HERO_PILLARS.map((pillar) => {
                  const Icon = pillarIcons[pillar.icon]
                  return (
                    <div key={pillar.label} className="hero-pillar-item group text-center sm:text-left">
                      <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-gold/20 bg-gold/[0.04] transition-colors duration-500 group-hover:border-gold/40 group-hover:bg-gold/10 sm:mx-0">
                        <Icon
                          className="h-4 w-4 text-gold transition-transform duration-500 group-hover:scale-105"
                          strokeWidth={1.25}
                        />
                      </div>
                      <p className="text-[10px] font-semibold leading-snug tracking-[0.16em] text-navy/72 uppercase">
                        {pillar.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </Reveal>

            <Reveal immediate delay={520}>
              <div className="mt-12 flex flex-wrap items-end gap-5 border-t border-gold/10 pt-10 md:mt-14 md:pt-12">
                <p className="font-serif text-3xl italic tracking-wide text-gold md:text-[2.35rem]">
                  S. Raja
                </p>
                <span className="mb-2 hidden h-px w-8 bg-gold/30 sm:block" aria-hidden />
                <p className="pb-1 text-[10px] font-medium tracking-[0.22em] text-navy/50 uppercase">
                  Medical Astrologer & Advisor
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
