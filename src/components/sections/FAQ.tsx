import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const faqs = [
  {
    question: 'What is Constitutional Observation?',
    answer:
      'Constitutional Observation is a structured method of studying recurring patterns, tendencies, timing cycles, and behavioural signatures that may influence human experience.',
  },
  {
    question: 'Is this medical diagnosis or treatment?',
    answer:
      'No. This work is educational and observational in nature. It is not intended to diagnose, treat, cure, or prevent any medical condition. Medical concerns should be discussed with an appropriately qualified healthcare professional.',
  },
  {
    question: 'What does a consultation focus on?',
    answer:
      'Consultations may explore constitutional tendencies, recurring life patterns, timing cycles, psychological themes, and structured observational insights, depending on the purpose of the engagement.',
  },
  {
    question: 'Why is observation important?',
    answer:
      'Observation helps distinguish a recurring pattern from an isolated event. The method therefore begins with documentation and context before interpretation.',
  },
  {
    question: 'What makes this approach different?',
    answer:
      'Rather than focusing on a single event or symptom, the framework considers interconnected patterns across constitution, timing, behaviour, environment, and lived experience.',
  },
  {
    question: 'Is my information confidential?',
    answer:
      'Personal information, consultation notes, and observational reports are handled privately and confidentially within the scope of the consultation process.',
  },
  {
    question: 'Who is this work intended for?',
    answer:
      'It is intended for thoughtful individuals interested in self-understanding, constitutional research, pattern intelligence, and long-term observation.',
  },
  {
    question: 'Which planets are associated with chronic diseases in medical astrology?',
    answer:
      'In traditional medical astrology, practitioners may interpret Saturn, Mars, Rahu, and Ketu, along with the 6th, 8th, and 12th houses, when discussing themes of illness or prolonged challenges. These are astrological interpretations, not scientifically validated indicators of disease, immunity, or prognosis. Astrology cannot diagnose or predict an individual medical condition; consult a qualified healthcare professional about symptoms or health risks.',
  },
  {
    question: 'Can Kundli analysis predict stomach or digestive disorders?',
    answer:
      'Some medical astrology traditions examine the 6th house and its planetary associations when interpreting digestive-health themes. A birth chart cannot reliably identify, diagnose, or predict acidity, inflammation, or other digestive disorders. Persistent digestive symptoms should be assessed by a qualified healthcare professional.',
  },
  {
    question: 'Can astrology identify which chakra is blocked?',
    answer:
      'Some spiritual and astrological traditions associate planets or zodiac signs with chakra symbolism. There is no established scientific method for diagnosing a blocked chakra from a birth chart, and such an interpretation should not be treated as a medical assessment. If you have physical or mental health concerns, seek appropriate professional care.',
  },
  {
    question: 'What astrological remedies are recommended for joint pain or weak bones?',
    answer:
      'Traditional astrological practices may symbolically associate the Sun and Saturn with bones or the skeletal system, and some practitioners discuss lifestyle practices or spiritual rituals as complementary traditions. Gemstones, rudraksha, or astrological remedies have not been established as treatments for joint pain or bone disease. Please seek medical assessment for persistent pain, injury, or suspected bone weakness, and do not delay prescribed care.',
  },
  {
    question: 'How are Dr. George Carey’s cell salts related to birth charts and healing?',
    answer:
      'Dr. George Carey’s writings connected zodiac signs with a twelve-cell-salt system, an idea found in historical astrological and biochemical traditions. These associations are not established by modern clinical evidence as a way to identify mineral deficiencies or treat disease from a birth chart. Cell salts should not replace evidence-based diagnosis, nutrition advice, or medical treatment; consult a qualified clinician about suspected deficiencies.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="editorial-section bg-white">
      <div className="mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <SectionHeading
          label="Questions"
          title="A clearer view of the method."
          subtitle="Answers about constitutional observation, consultation, medical astrology traditions, confidentiality, and the boundaries of this work."
        />

        <div className="mt-14 border-t border-navy/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="border-b border-navy/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl text-navy md:text-2xl">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-7 pr-8 text-sm leading-7 text-navy/60 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
