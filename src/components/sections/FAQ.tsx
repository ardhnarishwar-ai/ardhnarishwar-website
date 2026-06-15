export function FAQ() {
const faqs = [
{
  question: "What is Constitutional Observation?",
  answer:
    "Constitutional Observation is a structured method of studying recurring patterns, tendencies, timing cycles, and behavioral signatures that may influence human experience."
},

{
  question: "Is this medical diagnosis or treatment?",
  answer:
    "No. This work is educational and observational in nature. It is not intended to diagnose, treat, cure, or prevent any medical condition."
},

{
  question: "What does a consultation focus on?",
  answer:
    "Consultations focus on constitutional tendencies, recurring life patterns, timing cycles, psychological themes, and structured observational insights."
},

{
  question: "Why is observation important?",
  answer:
    "Many recurring challenges emerge through identifiable patterns. Observation helps reveal these deeper structures before interpretation."
},

{
  question: "What makes this approach different?",
  answer:
    "Rather than focusing on isolated events, this framework studies interconnected patterns across constitution, timing, behavior, and life experience."
},

{
  question: "Is my information confidential?",
  answer:
    "Yes. All personal information, consultation notes, and observational reports remain strictly confidential."
},

{
  question: "Who is this work intended for?",
  answer:
    "This work is intended for thoughtful individuals interested in self-understanding, constitutional research, pattern intelligence, and long-term observation."
}
]

  return (
    <section id="faq" className="section-flow py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-5 md:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-navy">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-navy/70 max-w-3xl mx-auto">
            Understanding the principles, methodology, and observational framework behind constitutional observation and pattern intelligence.
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
