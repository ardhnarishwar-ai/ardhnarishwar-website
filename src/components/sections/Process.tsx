import { PROCESS_STEPS } from '../../data/site'

export function Process() {
  return (
    <section id="process" className="observatory-process">
      <div className="observatory-container">
        <div className="observatory-process-head">
          <p className="observatory-eyebrow">THE METHOD</p>
          <h2>From intake to insight.<br /><em>Nothing is rushed.</em></h2>
          <p>
            A four-stage framework keeps the work grounded: collect the context, map the
            pattern, document the observation, then discuss what it may mean.
          </p>
        </div>

        <div className="observatory-process-grid">
          {PROCESS_STEPS.map((step) => (
            <article key={step.step}>
              <span>{String(step.step).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
