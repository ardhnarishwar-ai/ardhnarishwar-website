export function KnowledgeCenter() {
  const topics = [
    ['Five Elements & Human Constitution', 'Earth, Water, Fire, Air, and Space as traditional principles for observing structure, vitality, movement, transformation, and awareness.'],
    ['Planetary Correspondences', 'Traditional relationships between planetary symbolism, constitutional tendencies, timing cycles, and wellness observation.'],
    ['Zodiac & Human Body', 'Traditional perspectives connecting zodiac archetypes with anatomical regions and constitutional themes.'],
    ['Solar–Lunar Framework', 'Symbolic solar and lunar cycles considered alongside personal rhythms, vitality patterns, and life observation.'],
  ]

  return (
    <section id="knowledge" className="editorial-section bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="max-w-3xl">
          <p className="editorial-kicker">Knowledge centre</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-navy md:text-5xl">A place to study the framework.</h2>
          <p className="mt-5 text-base leading-8 text-navy/58">Educational material presented for observation, reflection, and deeper understanding—not as a substitute for medical diagnosis or treatment.</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden border border-navy/10 bg-navy/10 md:grid-cols-2">
          {topics.map(([title, text], i) => (
            <article key={title} className="bg-white p-8 md:p-10">
              <span className="font-serif text-2xl text-gold/70">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-5 font-serif text-2xl text-navy">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-navy/58">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
