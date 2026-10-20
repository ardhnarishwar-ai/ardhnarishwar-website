import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const faqs = [
  {
    question: 'Which planet is responsible for chronic diseases in astrology?',
    answer:
      'In medical astrology, malefic planets like Saturn (Shani), Rahu, Ketu, and Mars (Mangal) afflicted in the 6th, 8th, or 12th houses often indicate chronic or long-term health vulnerabilities and low immunity.',
  },
  {
    question: 'How does Kundli analysis predict stomach and digestive disorders?',
    answer:
      'The 6th house of the zodiac represents digestion, stomach, and intestines. Afflictions to the 6th house or its lord by planets like Mars or Sun frequently point toward acidity, gut inflammation, and metabolic imbalances.',
  },
  {
    question: 'Can astrology tell which chakra is blocked in my body?',
    answer:
      'Yes. Each of the seven main chakras corresponds to specific planetary energies and zodiac signs. By examining planetary weaknesses or combustions in a birth chart, an astrolonger can precisely identify which chakra energy vortex is blocked.',
  },
  {
    question: 'What is the astrological remedy for joint pain and bone weakness?',
    answer:
      'Bone health, joints, and skeletal structure are governed by Saturn and the Sun. Astromedical remedies involve combining targeted lifestyle alignments, gemstone/rudraksha therapies, and Dr. George Carey's biochemical cell salts (such as Calc Phos) corresponding to the affected zodiac sign.',
  },
  {
    question: "How are Dr. Carey's cell salts related to birth charts and healing?",
    answer:
      "Dr. George Carey's biochemical theory links the 12 signs of the zodiac to the 12 inorganic mineral salts present in human blood and tissue. Matching a native's birth chart sign deficiencies with the correct cell salt restores chemical equilibrium in the body.",
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
          subtitle="Answers to common questions about medical astrology and health."
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
