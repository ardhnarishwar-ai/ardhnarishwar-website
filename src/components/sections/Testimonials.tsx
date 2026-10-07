import { TESTIMONIALS } from '../../data/site'

export function Testimonials() {
  return (
    <section id="testimonials" className="observatory-testimonials">
      <div className="observatory-container">
        <div className="observatory-testimonial-head">
          <p className="observatory-eyebrow">PRIVATE REFLECTIONS</p>
          <h2>Depth over spectacle.</h2>
        </div>
        <div className="observatory-testimonial-list">
          {TESTIMONIALS.map((t, i) => (
            <blockquote key={t.author}>
              <span>0{i + 1}</span>
              <p>“{t.quote}”</p>
              <footer>{t.author} · {t.role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
