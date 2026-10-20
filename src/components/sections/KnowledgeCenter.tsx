export function KnowledgeCenter() {
  const topics = [
    ['01', 'Five Elements & Human Constitution', 'Traditional principles used as a language for observing structure, vitality, movement, transformation, and awareness.'],
    ['02', 'Planetary Correspondences', 'Traditional interpretations of planetary symbolism in relation to individual constitution, timing cycles, and health-focused observation.'],
    ['03', 'Zodiac & Human Body', 'Traditional perspectives connecting zodiac archetypes with anatomical regions and constitutional themes.'],
    ['04', 'Solar–Lunar Framework', 'Symbolic solar and lunar cycles considered alongside personal rhythms, vitality patterns, and life observation.'],
  ]

  return (
    <section id="knowledge" className="observatory-section observatory-knowledge">
      <div className="observatory-container">
        <div className="observatory-section-intro">
          <div>
            <p className="observatory-eyebrow">KNOWLEDGE CENTRE</p>
            <h2>Study the framework.<br /><em>Question the assumptions.</em></h2>
          </div>
          <p>
            Explore traditional ideas about planetary patterns, human constitution, and
            individual health. The material supports observation and reflection, not medical diagnosis or treatment.
          </p>
        </div>

        <figure className="observatory-knowledge-visual">
          <img
            src="/images/1000179701-Picsart-AiImageEnhancer.jpg"
            alt="Traditional Pancha Mahabhuta framework: Earth, Water, Fire, Air, and Space as a philosophical language for observing the human constitution"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '900px',
              margin: '0 auto',
              display: 'block',
              objectFit: 'contain'
            }}
          />
          <figcaption>
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
