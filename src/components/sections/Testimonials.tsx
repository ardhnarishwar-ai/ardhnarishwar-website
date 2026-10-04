import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  return (
    <section id="testimonials" className="editorial-section bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <SectionHeading
          revealDelay={60}
          label="Client Reflections"
          title="Private work should feel personal."
          subtitle="A small selection of reflections from clients who value depth, discretion, and structured observation."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-navy/10 bg-navy/10 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} soft delay={160 + i * 100}>
              <blockquote className="flex h-full flex-col bg-white p-8 md:p-9 lg:p-10">
                <Quote className="h-6 w-6 text-gold/65" strokeWidth={1} />
                <p className="mt-7 flex-1 font-serif text-xl leading-[1.7] text-navy/82">
                  “{t.quote}”
                </p>
                <footer className="mt-8 border-t border-navy/10 pt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-navy">{t.author}</p>
                  <p className="mt-1 text-[11px] text-navy/45">{t.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
