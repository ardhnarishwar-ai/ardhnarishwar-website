export function KnowledgeCenter() {
  const topics = [
    ['01', 'Five Elements & Human Constitution', 'Traditional principles used as a language for observing structure, vitality, movement, transformation, and awareness.'],
    ['02', 'Planetary Correspondences', 'Traditional relationships between planetary symbolism, constitutional tendencies, timing cycles, and wellness observation.'],
    ['03', 'Zodiac & Human Body', 'Traditional perspectives connecting zodiac archetypes with anatomical regions and constitutional themes.'],
    ['04', 'Solar–Lunar Framework', 'Symbolic solar and lunar cycles considered alongside personal rhythms, vitality patterns, and life observation.'],
  ]

  return (
    <section id="knowledge" className="observatory-section observatory-knowledge">
      <div className="observatory-container">
        <div className="observatory-section-intro">
          <div>
            <p className="observatory-eyebrow">07 · KNOWLEDGE CENTRE</p>
            <h2>Study the framework.<br /><em>Question the assumptions.</em></h2>
          </div>
          <p>
            Educational material is presented for observation, reflection, and deeper
            understanding—not as a substitute for medical diagnosis or treatment.
          </p>
        </div>

        <figure className="observatory-knowledge-visual">
          <img
            src="/images/five-elements-reference.jpg"
            alt="Traditional Pancha Mahabhuta framework: Earth, Water, Fire, Air, and Space as a philosophical language for observing the human constitution"
            loading="lazy"
          />
          <figcaption>
            <span>REFERENCE PLATE · 01</span>
            <span>FIVE ELEMENTS · HUMAN BODY SEQUENCE</span>
          </figcaption>
        </figure>

        <div className="observatory-knowledge-list">
          {topics.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
