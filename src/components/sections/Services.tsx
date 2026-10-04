import {
  Activity,
  Brain,
  Clock,
  Compass,
  Eye,
  FileText,
  Heart,
  type LucideIcon,
} from 'lucide-react'
import { SERVICES } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  eye: Eye,
  heart: Heart,
  compass: Compass,
  brain: Brain,
  clock: Clock,
  file: FileText,
}

export function Services() {
  return (
    <section id="services" className="editorial-section bg-[#f7f7f4]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <SectionHeading
          label="Consultations"
          title="Private astromedical services"
          subtitle="Each engagement is conducted with discretion, structured observation, and individualized review."
        />

        <div className="mt-16 grid border-t border-navy/10 lg:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <Reveal key={service.title} soft>
                <article className="grid gap-6 border-b border-navy/10 py-9 md:grid-cols-[52px_1fr] md:gap-7 md:py-10 lg:pr-12">
                  <Icon className="mt-1 h-5 w-5 text-gold" strokeWidth={1.25} aria-hidden />
                  <div>
                    <div className="flex items-baseline justify-between gap-5">
                      <h3 className="font-serif text-2xl text-navy">{service.title}</h3>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-navy/35">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-navy/58">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
