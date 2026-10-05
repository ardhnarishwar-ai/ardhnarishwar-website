import { BookOpen, Eye, Shield, Layers } from 'lucide-react'
import { LINKS } from '../../data/site'
import { Button } from '../ui/Button'
import { LazyImage } from '../ui/LazyImage'
import { Reveal } from '../ui/Reveal'

const traits = [
  { icon: BookOpen, title: 'Research-Driven Approach', text: 'Multi-layer pattern study, constitutional analysis, and recurring-signature synthesis drawn from long-term observational research.' },
  { icon: Eye, title: 'Deep Observation', text: 'Attentive reading of psychological signatures, wellness markers, and life-pattern structures.' },
  { icon: Layers, title: 'Structured Consultation Method', text: 'A clear four-phase process—from intake to personalized guidance—without ambiguity or noise.' },
  { icon: Shield, title: 'Private Confidential Guidance', text: 'Discreet, one-to-one consultations designed for executives, wellness seekers, and pattern analysts.' },
]

export function AboutSRaja() {
  return (
    <section id="raja" className="editorial-section bg-[#f7f7f4]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <Reveal soft delay={120}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <LazyImage src="/images/hero-reference.png" alt="S. Raja - Constitutional Observer & Pattern Analyst" className="portrait-warm" />
              </div>
              <div className="absolute -bottom-4 left-4 border border-navy/12 bg-white px-6 py-4 md:left-6">
                <p className="font-serif text-2xl text-gold">15+</p>
                <p className="text-[10px] tracking-[0.18em] text-navy/55 uppercase">Years Observation</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal soft delay={80}>
              <p className="text-xs font-medium tracking-[0.20em] text-gold uppercase">The Observer Behind Ardhnarishwar</p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-navy md:text-5xl lg:text-[3.25rem]">S. Raja</h2>
              <p className="mt-2 text-gold">Founder & Research Director</p>
              <p className="font-medium text-navy/80">Ardhnarishwar Observatory</p>
              <p className="mt-3 text-sm font-medium tracking-[0.2em] text-navy/58 uppercase">Founder • Observer • Constitutional Researcher</p>
            </Reveal>
            <Reveal soft delay={160}>
              <p className="mt-8 whitespace-pre-line text-base leading-[1.82] text-navy/66 md:text-lg">{`Every journey begins with a question.

Mine began with a simple observation:

Why do individuals with similar symptoms often experience entirely different outcomes?

Over years of observation, I found myself drawn not toward symptoms, but toward patterns.

Symptoms change.

Circumstances change.

Yet constitutional tendencies often leave recurring signatures throughout life.

This search gradually evolved into Ardhnarishwar —
a private observatory dedicated to constitutional observation,
pattern intelligence, constitutional indicators,
and the study of recurring signatures across human life.

My work is not to predict events.

My work is to observe the constitutional patterns from which events emerge.

— S. Raja`}</p>
            </Reveal>
            <div className="mt-11 grid gap-0 border-t border-navy/10 sm:grid-cols-2">
              {traits.map((trait, i) => (
                <Reveal key={trait.title} soft delay={240 + i * 80}>
                  <article className="flex h-full gap-4 border-b border-navy/10 py-6 sm:border-r sm:px-6 sm:first:pl-0 sm:[&:nth-child(2n)]:border-r-0">
                    <trait.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.25} />
                    <div><h3 className="font-serif text-lg text-navy">{trait.title}</h3><p className="mt-2 text-sm leading-[1.7] text-navy/58">{trait.text}</p></div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal soft delay={560}><div className="mt-12"><Button href={LINKS.consultationForm}>Request Private Consultation</Button></div></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}