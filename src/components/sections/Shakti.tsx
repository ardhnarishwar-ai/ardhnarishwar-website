export function Shakti() {
  const layers = [
    ['01', 'Physical', 'Structure, vitality, tendencies, and physical expression.'],
    ['02', 'Mental', 'Thought patterns, perception, focus, and cognitive tendencies.'],
    ['03', 'Emotional', 'Sensitivity, resilience, responses, and emotional expression.'],
    ['04', 'Behavioural', 'Habits, actions, decisions, and recurring lifestyle tendencies.'],
    ['05', 'Timing', 'Cycles, transitions, rhythms, and the context in which patterns emerge.'],
  ]

  return (
    <section id="shakti" className="observatory-section observatory-constitution">
      <div className="observatory-container">
        <div className="observatory-section-intro">
          <div>
            <p className="observatory-eyebrow">06 · HUMAN CONSTITUTION</p>
            <h2>The person is more<br /><em>than the symptom.</em></h2>
          </div>
          <p>
            Constitutional observation considers several interacting layers rather than
            reducing an individual to one label.
          </p>
        </div>

        <div className="observatory-constitution-list">
          {layers.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
