export function Timeline() {
  const milestones = [
    ['2012', 'A Question Emerges', 'Why do individuals with similar symptoms experience entirely different outcomes?'],
    ['2016', 'Pattern Mapping Begins', 'Years of observation reveal recurring constitutional signatures beyond symptoms.'],
    ['2020', 'Framework Takes Shape', 'A structured model develops around constitution, timing, behaviour, and wellness observation.'],
    ['2026', 'Ardhnarishwar Observatory', 'The research-oriented initiative becomes a home for ongoing observation and documentation.'],
    ['Today', 'Ongoing Research', 'The work continues through case observation, pattern mapping, education, and private consultation.'],
  ]

  return (
    <section id="timeline" className="editorial-section bg-[#fafaf8]">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <p className="editorial-kicker">The journey</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-navy md:text-5xl">One question. Years of observation.</h2>
          <p className="mt-5 text-base leading-7 text-navy/58">Ardhnarishwar did not begin with a finished answer. It began with a question—and the discipline to keep observing.</p>
        </div>
        <div className="mt-16 border-t border-navy/10">
          {milestones.map(([year, title, text]) => (
            <div key={year} className="grid gap-4 border-b border-navy/10 py-8 md:grid-cols-[120px_1fr_1.2fr] md:gap-10">
              <p className="font-serif text-2xl text-gold">{year}</p>
              <h3 className="font-serif text-xl text-navy">{title}</h3>
              <p className="text-sm leading-7 text-navy/58">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
