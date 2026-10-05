import { PROCESS_STEPS } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const STEP_STAGGER = 120

export function Process() {
  return (
    <section id="process" className="editorial-section bg-white py-24 md:py-32 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <SectionHeading
          align="left"
          label="The Method"
          title="A structured four-step observational framework"
          subtitle="From private intake to personalized insights, each phase is designed for clarity, confidentiality, and thoughtful observation."
        />

        <div className="mt-14 border-t border-navy/10">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal
              key={step.step}
              soft
              delay={120 + i * STEP_STAGGER}
              className="border-b border-navy/10"
            >
              <article className="grid gap-5 py-9 md:grid-cols-[5rem_1fr_2fr] md:items-start md:gap-8 lg:py-11">
                <p className="font-serif text-4xl leading-none text-gold/55 md:text-5xl">
                  {String(step.step).padStart(2, '0')}
                </p>
                <h3 className="font-serif text-2xl leading-tight text-navy md:text-3xl">
                  {step.title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-navy/62 md:text-base">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
