export function WhyWeExist() {
  const items = [
    ['Why we exist', 'Health and human experience are rarely one-dimensional. We look beyond isolated events to recurring constitutional, behavioural, environmental, and timing patterns.'],
    ['What we do', 'Ardhnarishwar is a research-led initiative focused on constitutional observation and astromedical pattern intelligence.'],
    ['For whom', 'For people who want a deeper, more individual perspective—quietly, privately, and without spectacle.'],
  ]

  return (
    <section id="purpose" className="editorial-section bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="editorial-kicker">Why Ardhnarishwar</p>
            <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight text-navy md:text-5xl">We began with a question, not an answer.</h2>
          </div>
          <div className="border-t border-navy/10">
            {items.map(([title, text]) => (
              <article key={title} className="grid gap-3 border-b border-navy/10 py-8 md:grid-cols-[180px_1fr] md:gap-8">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">{title}</h3>
                <p className="max-w-2xl text-base leading-8 text-navy/62">{text}</p>
              </article>
            ))}
            <blockquote className="mt-10 max-w-2xl border-l border-gold/60 pl-6 font-serif text-2xl leading-relaxed text-navy/78">
              “Meaningful insight begins not with prediction, but with observation.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
