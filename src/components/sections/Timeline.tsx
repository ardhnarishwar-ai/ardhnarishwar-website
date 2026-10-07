export function Timeline() {
  const milestones = [
    ['2012', 'A question emerges', 'Why do similar symptoms produce different outcomes?'],
    ['2016', 'Pattern mapping begins', 'Recurring constitutional signatures become the focus of observation.'],
    ['2020', 'A framework takes shape', 'Constitution, timing, behaviour, and context become one working field.'],
    ['2026', 'Ardhnarishwar Observatory', 'The research-oriented initiative becomes a home for continued observation.'],
    ['Today', 'Ongoing research', 'Case observation, documentation, education, and private consultation continue.'],
  ]

  return (
    <section id="timeline" className="observatory-section observatory-timeline">
      <div className="observatory-container">
        <div className="observatory-section-intro">
          <div>
            <p className="observatory-eyebrow">THE JOURNEY</p>
            <h2>One question.<br /><em>Years of observation.</em></h2>
          </div>
          <p>Ardhnarishwar did not begin with a finished answer. It began with a question—and the discipline to keep observing.</p>
        </div>

        <div className="observatory-timeline-list">
          {milestones.map(([year, title, text]) => (
            <article key={year}>
              <span>{year}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
