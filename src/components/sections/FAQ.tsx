import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const faqs = [
  {
    question: 'Which planet is responsible for chronic diseases in astrology?',
    answer:
      'In traditional medical astrology, practitioners may interpret Saturn (Shani), Rahu, Ketu, and Mars (Mangal), along with the 6th, 8th, and 12th houses, when discussing themes of prolonged health challenges. These are astrological interpretations, not scientifically validated indicators of chronic disease or low immunity. Astrology cannot diagnose or predict a medical condition; please consult a qualified healthcare professional about symptoms or health risks.',
  },
  {
    question: 'How does Kundli analysis predict stomach and digestive disorders?',
    answer:
      'Some medical astrology traditions examine the 6th house and its planetary associations when interpreting digestive-health themes. A birth chart cannot reliably identify or predict acidity, gut inflammation, or metabolic disorders. Persistent digestive symptoms should be assessed by a qualified healthcare professional.',
  },
  {
    question: 'Can astrology tell which chakra is blocked in my body?',
    answer:
      'Some spiritual and astrological traditions associate planets and zodiac signs with chakra symbolism. However, there is no established scientific method for identifying a blocked chakra from a birth chart, and this should not be treated as a medical assessment. Seek appropriate professional care for physical or mental health concerns.',
  },
  {
    question: 'What is the astrological remedy for joint pain and bone weakness?',
    answer:
      'Traditional astrological practices may symbolically associate Saturn and the Sun with bones and the skeletal system. Some practitioners discuss lifestyle practices, gemstones, or rudraksha as complementary spiritual traditions, but these have not been established as treatments for joint pain or bone disease. Seek medical advice for persistent pain, injury, or suspected bone weakness, and do not delay prescribed care.',
  },
  {
    question: 'How are Dr. Carey’s cell salts related to birth charts and healing?',
    answer:
      'Dr. George Carey’s writings connected the twelve zodiac signs with a twelve-cell-salt system found in historical astrological and biochemical traditions. These associations are not established by modern clinical evidence as a way to identify mineral deficiencies or treat disease from a birth chart. Cell salts should not replace evidence-based diagnosis, nutrition advice, or medical treatment; consult a qualified clinician about suspected deficiencies.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="editorial-section bg-white">
      <div className="mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <SectionHeading
          label="Questions & Answers"
          title="Medical Astrology & Health."
          subtitle="Answers to common questions about medical astrology traditions, interpreted with care and clear boundaries around medical advice."
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
