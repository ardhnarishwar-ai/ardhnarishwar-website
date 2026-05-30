import { PROCESS_STEPS } from '../../data/site'
import { SectionAtmosphere } from '../layout/SectionAtmosphere'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const STEP_STAGGER = 140
const SECTION_DELAY = 60

export function Process() {
  return (
    <section id="process" className="section-flow section-lazy relative py-28 md:py-36 lg:py-40">
      <SectionAtmosphere variant="deep" position="top" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <SectionHeading
          revealDelay={SECTION_DELAY}
          label="The Method"
          title="A Structured Four-Step Consultation Process"
          subtitle="From private intake to personalized guidance—every phase is designed for clarity, confidentiality, and pattern precision."
        />

        <div className="relative max-w-4xl md:mx-auto">
          <div
            className="process-line-track absolute left-6 top-4 bottom-4 hidden w-px md:left-1/2 md:block md:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-14 md:space-y-0">
            {PROCESS_STEPS.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <Reveal
                  key={step.step}
                  soft
                  delay={220 + i * STEP_STAGGER}
                  className={`process-step ${i > 0 ? 'md:mt-20' : ''}`}
                >
                  <div
                    className={`relative flex flex-col gap-8 md:flex-row md:items-center md:gap-14 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div
                        className={`inline-flex items-center gap-4 ${isEven ? 'md:flex-row-reverse' : ''}`}
                      >
                        <span className="font-serif text-5xl text-gold/25 md:text-6xl">
                          {String(step.step).padStart(2, '0')}
                        </span>
                        <h3 className="font-serif text-2xl text-navy md:text-[1.75rem] lg:text-3xl">
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className={`mt-5 max-w-md text-sm leading-[1.8] text-navy/62 md:text-base ${
                          isEven ? 'md:ml-auto' : ''
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex shrink-0 justify-center md:w-[4.5rem]">
                      <div className="relative">
                        <span className="process-node-glow" aria-hidden />
                        <div className="process-node relative flex h-12 w-12 items-center justify-center rounded-full md:h-14 md:w-14">
                          <span className="text-sm font-semibold tracking-wide text-gold">
                            {step.step}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden flex-1 md:block" aria-hidden />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
