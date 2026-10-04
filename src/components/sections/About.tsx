import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const pillars = [
  ['01', 'Medical Astrology', 'Traditional planetary signatures studied alongside constitutional tendencies and observational wellness patterns—not fortune telling.'],
  ['02', 'Psychological Patterns', 'Structured observation of emotional responses, instinctive patterns, and recurring behavioural signatures.'],
  ['03', 'Planetary Timing', 'Observation of transits, progressions, and dasha cycles as timing frameworks for personal reflection and decision-making.'],
  ['04', 'Lifestyle Observation', 'Daily rhythms, stress signatures, environment, and lived experience considered alongside the wider constitutional picture.'],
  ['05', 'Wellness Guidance', 'Clear observational insights designed to support awareness and informed conversations with appropriate professionals.'],
  ['06', 'Structured Method', 'A calm, non-sensational framework built around observation, documentation, comparison, and long-term pattern study.'],
]

export function About() {
  return (
    <section id="about" className="editorial-section bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <SectionHeading
          label="Why observation matters"
          title="Many symptoms are visible. Patterns are not."
          subtitle="Human experience is rarely one-dimensional. Ardhnarishwar studies constitutional, psychological, behavioural, environmental, and timing patterns as a connected field of observation."
        />

        <div className="mt-16 grid border-t border-navy/10 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(([number, title, text]) => (
            <Reveal key={title} soft>
              <article className="border-b border-navy/10 p-7 md:border-r md:p-9 lg:p-10">
                <span className="font-serif text-xl text-gold/70">{number}</span>
                <h3 className="mt-5 font-serif text-2xl text-navy">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-navy/58">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-navy/10 pt-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <p className="editorial-kicker">The Ardhnarishwar difference</p>
          <div className="grid gap-7 sm:grid-cols-2">
            {[
              ['Observation first', 'We begin by observing before interpreting.'],
              ['Constitution before symptom', 'Recurring patterns are considered alongside isolated experiences.'],
              ['Timing matters', 'Cycles and timing are treated as part of the wider context.'],
              ['Research-led', 'Documentation and long-term observation remain central to the method.'],
            ].map(([title, text]) => (
              <div key={title} className="border-l border-gold/50 pl-5">
                <h4 className="font-serif text-lg text-navy">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-navy/58">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
