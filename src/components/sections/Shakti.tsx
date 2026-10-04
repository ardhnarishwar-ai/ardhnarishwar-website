export function Shakti() {
  const layers = [
    ['Physical constitution', 'Body structure, vitality, tendencies, and physical expression.'],
    ['Mental constitution', 'Thought patterns, perception, focus, and cognitive tendencies.'],
    ['Emotional constitution', 'Emotional responses, sensitivity, resilience, and expression.'],
    ['Behavioural constitution', 'Habits, actions, decision patterns, and lifestyle tendencies.'],
    ['Timing constitution', 'Life cycles, timing patterns, and constitutional rhythms.'],
  ]

  return (
    <section id="shakti" className="editorial-section bg-[#f7f7f4]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="editorial-kicker">Human Constitution</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-navy md:text-5xl">The person is more than the symptom.</h2>
            <p className="mt-6 max-w-md text-base leading-8 text-navy/58">Constitutional observation looks at interacting layers rather than reducing an individual to a single label.</p>
          </div>
          <div className="border-t border-navy/10">
            {layers.map(([title, text], i) => (
              <div key={title} className="grid gap-2 border-b border-navy/10 py-7 md:grid-cols-[48px_220px_1fr] md:items-start md:gap-5">
                <span className="font-serif text-lg text-gold/70">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-xl text-navy">{title}</h3>
                <p className="text-sm leading-7 text-navy/58">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
