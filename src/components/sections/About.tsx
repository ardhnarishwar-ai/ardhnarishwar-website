import { SectionHeading } from '../ui/SectionHeading'
import { LuxuryCard } from '../ui/LuxuryCard'
import { Reveal } from '../ui/Reveal'
import { SectionAtmosphere } from '../layout/SectionAtmosphere'
import { SacredGeometry } from '../layout/SacredGeometry'

const pillars = [
  {
    title: 'Medical Astrology',
    text: 'A disciplined study of planetary signatures correlated with health tendencies, constitutional patterns, and observational wellness markers—not fortune telling.',
  },
  {
    title: 'Psychological Patterns',
    text: 'Structured reading of emotional landscapes, instinctual responses, and recurring behavioral geometries within the natal chart.',
  },
  {
    title: 'Planetary Timing',
    text: 'Precise transit, progression, and dasha observation to identify windows for recovery, transition, and strategic decision-making.',
  },
  {
    title: 'Lifestyle Observation',
    text: 'Integration of daily rhythms, stress signatures, and environmental factors with chart-derived pattern intelligence.',
  },
  {
    title: 'Wellness Guidance',
    text: 'Clear, actionable recommendations grounded in pattern analysis—supporting balance without prescriptive dogma.',
  },
  {
    title: 'Structured Non-Religious Approach',
    text: 'An intelligent, calm methodology rooted in observation and analysis—free from ritualistic or religious framing.',
  },
]

const STAGGER = 90
const SECTION_DELAY = 0

export function About() {
  return (
    <section id="about" className="section-flow section-lazy relative py-28 md:py-36 lg:py-40">
      <SectionAtmosphere variant="warm" position="top" />
      <SacredGeometry className="left-0 top-20 h-80 w-80 -translate-x-1/3 opacity-[0.12]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <SectionHeading
          revealDelay={SECTION_DELAY}
          label="label="Why Observation Matters"
          title="title="Many Symptoms Are Visible. Patterns Are Not"
          subtitle="Many health, emotional, and life challenges emerge through interconnected patterns involving constitution, psychology, environment, timing, and recurring life cycles."
        />
<Reveal soft delay={120}>
  <p className="mx-auto max-w-3xl text-center text-navy/80 leading-relaxed mb-12">
    While individual events may appear unrelated, recurring themes often reveal
    deeper constitutional, psychological, and timing-based relationships.
    Our approach focuses on identifying these hidden structures through
    disciplined observation and pattern analysis.
  </p>
</Reveal>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pillars.map((item, i) => (
            <Reveal key={item.title} soft delay={180 + i * STAGGER}>
              <LuxuryCard variant="frost" className="h-full p-8 md:p-9">
                <span className="mb-5 inline-block font-serif text-2xl text-gold/75">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-xl text-navy md:text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-navy/62 md:text-base">{item.text}</p>
                <div className="card-accent-line mt-7" aria-hidden />
              </LuxuryCard>
            </Reveal>
          ))}
        </div>

        <Reveal soft delay={180 + pillars.length * STAGGER + 80}>
          <p className="mx-auto mt-16 max-w-3xl text-center font-serif text-lg leading-[1.85] text-navy/68 italic md:mt-20 md:text-xl">
            The work is observational, intelligent, and elite—designed for those who seek depth
            without noise, and transformation without spectacle.
          </p>
        </Reveal>
        <div className="rounded-2xl border border-gold/20 p-8 mt-12 text-center">
  <h3 className="font-serif text-2xl text-navy mb-4">
    What Makes Ardhnarishwar Different
  </h3>

  <div className="grid gap-6 md:grid-cols-2 mt-8">

    <div className="rounded-xl border border-gold/20 p-6">
      <h4 className="font-serif text-xl text-navy mb-3">
        Observation First
      </h4>
      <p>
        We begin with observation before interpretation.
      </p>
    </div>

    <div className="rounded-xl border border-gold/20 p-6">
      <h4 className="font-serif text-xl text-navy mb-3">
        Constitution Before Symptoms
      </h4>
      <p>
        Patterns are explored at the constitutional level rather than through isolated symptoms alone.
      </p>
    </div>

    <div className="rounded-xl border border-gold/20 p-6">
      <h4 className="font-serif text-xl text-navy mb-3">
        Timing Matters
      </h4>
      <p>
        Human experiences often unfold through recurring cycles and timing patterns.
      </p>
    </div>

    <div className="rounded-xl border border-gold/20 p-6">
      <h4 className="font-serif text-xl text-navy mb-3">
        Research-Led Approach
      </h4>
      <p>
        Built on observation, documentation, and long-term pattern study.
      </p>
    </div>

  </div>
</div>
      </div>
    </section>
  )
}
