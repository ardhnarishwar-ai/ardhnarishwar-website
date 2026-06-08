export function FAQ() {
  const faqs = [
    {
      question: "What is Medical Astrology?",
      answer:
        "Ancient Medical Astrology is a traditional system of observation that studies the relationship between planetary patterns, constitutional tendencies, timing cycles, and human well-being. For centuries, astrologers, physicians, and herbal practitioners used these principles to understand recurring health and life patterns at a deeper level."
    },
    {
      question: "Why is birth time important?",
      answer:
        "The exact birth time creates a unique astrological blueprint. This chart provides the foundation for studying constitutional tendencies, planetary strengths, timing cycles, and recurring patterns observed throughout life."
    },
    {
      question: "How can a birth chart be used for wellness observation?",
      answer:
        "Ancient Medical Astrology views the birth chart as a symbolic map of the individual. Through structured analysis of planetary placements, houses, aspects, and timing systems, recurring wellness themes, stress signatures, constitutional patterns, and life-cycle trends can be observed."
    },
    {
      question: "What makes Medical Astrology unique?",
      answer:
        "Medical Astrology views the individual as an interconnected system rather than examining isolated symptoms. It studies constitutional patterns, planetary timing cycles, and recurring themes that may influence overall well-being."
    },
    {
      question: "Can a birth chart reveal hidden health patterns?",
      answer:
           "Ancient Medical Astrology is based on the observation that planetary configurations may reflect constitutional tendencies, energetic patterns, and recurring wellness themes throughout life. Unlike modern diagnostic machines that examine specific organs or systems, Ancient Medical Astrology studies the individual at a broader constitutional level through birth-time and planetary analysis. By examining planetary relationships, house structures, timing cycles, and astrological signatures, we seek to identify deeper patterns that may influence vitality, recovery tendencies, stress responses, behavioral habits, and overall well-being."
    },
    {
      question: "What makes this approach different?",
      answer:
        "Rather than focusing on isolated events, Ancient Medical Astrology studies the individual as a complete system. Physical tendencies, psychological patterns, lifestyle rhythms, environmental influences, and timing cycles are examined together through a unified observational framework."
    },
    {
      question: "Why is observation important?",
      answer:
        "Many recurring life challenges follow identifiable patterns. Ancient Medical Astrology seeks to uncover these hidden structures through disciplined observation, allowing greater awareness, preparation, and informed decision-making."
    },
    { 
      question: "What will I receive?",
      answer:
        "You will receive a confidential observational report highlighting constitutional tendencies, timing themes, recurring patterns, and structured wellness observations derived through Medical Astrology analysis."
    },
    {
      question: "Is my information confidential?",
      answer:
        "Yes. All birth details, consultation notes, and observational reports remain strictly confidential and are used solely for the purpose of personalized analysis and guidance."
    }
  ];

  return (
    <section id="faq" className="section-flow py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-5 md:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-navy">
            Ancient Medical Astrology FAQ
          </h2>
          <p className="mt-4 text-navy/70 max-w-3xl mx-auto">
            Understanding the principles, methodology, and observational framework of Ancient Medical Astrology.
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
