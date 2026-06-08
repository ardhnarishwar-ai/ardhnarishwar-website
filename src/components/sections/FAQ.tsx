export function FAQ() {
  const faqs = [
    {
      question: "What is Medical Astrology?",
      answer:
        "Medical Astrology is an ancient observational discipline that studies the relationship between planetary patterns, constitutional tendencies, and wellness themes. It has been practiced across various traditions for centuries as a framework for understanding recurring health and lifestyle patterns."
    },
    {
      question: "How is the analysis performed?",
      answer:
        "The analysis is based on birth details, planetary positions, house relationships, timing cycles, and traditional Medical Astrology principles. No physical examination, laboratory testing, or medical scanning equipment is used."
    },
    {
      question: "Can a birth chart reveal wellness tendencies?",
      answer:
        "According to traditional Medical Astrology, planetary configurations may reflect constitutional strengths, recurring sensitivities, timing patterns, and lifestyle tendencies. These observations are interpreted through established astrological frameworks."
    },
    {
      question: "What makes Medical Astrology unique?",
      answer:
        "Medical Astrology views the individual as an interconnected system rather than examining isolated symptoms. It studies constitutional patterns, planetary timing cycles, and recurring themes that may influence overall well-being."
    },
    {
      question: "What will I receive?",
      answer:
        "You will receive a confidential observational report highlighting constitutional tendencies, timing themes, recurring patterns, and structured wellness observations derived through Medical Astrology analysis."
    },
    {
      question: "Is my information private?",
      answer:
        "Yes. All birth details, consultation notes, and observational reports remain strictly confidential and are used solely for the purpose of personalized analysis."
    }
  ]

  return (
    <section id="faq" className="section-flow py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-5 md:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-navy">
            Medical Astrology FAQ
          </h2>
          <p className="mt-4 text-navy/70 max-w-3xl mx-auto">
            Understanding the principles, methodology, and observational
            framework of Medical Astrology.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gold/20 p-6"
            >
              <h3 className="font-serif text-xl text-navy">
                {faq.question}
              </h3>
              <p className="mt-3 text-navy/70 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
