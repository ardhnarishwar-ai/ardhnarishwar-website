import { ArrowUpRight } from 'lucide-react'

const fields = [
  ['01', 'Constitution', 'The individual before the symptom: recurring tendencies, structure, temperament, and lived constitution.'],
  ['02', 'Psychology', 'Emotional responses, behavioural signatures, instinctive patterns, and recurring ways of experiencing life.'],
  ['03', 'Timing', 'Planetary cycles, transitions, and recurring windows considered as context rather than isolated prediction.'],
  ['04', 'Environment', 'Daily rhythms, stress, relationships, and circumstances that shape how a pattern expresses itself.'],
  ['05', 'Observation', 'Documentation, comparison, and long-term study before interpretation or recommendation.'],
]

export function About() {
  return (
    <section id="about" className="observatory-section observatory-about">
      <div className="observatory-container">
        <div className="observatory-manifesto">
          <div>
            <p className="observatory-eyebrow">WHY OBSERVATION MATTERS</p>
          </div>
          <div>
            <h2>Many symptoms are visible.<br /><em>Patterns are not.</em></h2>
            <p>
              Ardhnarishwar explores individual health and human constitution through a
              connected framework of traditional planetary patterns, personal rhythms,
              and lived experience. Each person is considered in their own context.
            </p>
            <p>
              The process begins by observing what repeats, what changes, what surrounds
              the individual, and how traditional planetary timing is interpreted alongside
              those observations.
            </p>
          </div>
        </div>

        <div className="observatory-field-index">
          <div className="observatory-index-heading">
            <span>THE FIELD OF OBSERVATION</span>
            <span>05 AREAS</span>
          </div>
          {fields.map(([number, title, text]) => (
            <article key={title}>
              <span className="field-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight size={18} strokeWidth={1.2} aria-hidden />
            </article>
          ))}
        </div>

        <div className="observatory-statement">
          <p>Observation first.</p>
          <p>Constitution before symptom.</p>
          <p>Timing within context.</p>
          <p>Research before certainty.</p>
        </div>
      </div>
    </section>
  )
}
