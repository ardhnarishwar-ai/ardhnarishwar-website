import {
  Activity,
  Brain,
  Clock,
  Compass,
  FileText,
  Heart,
  type LucideIcon,
} from 'lucide-react'
import { SERVICES } from '../../data/site'
import { IconBadge } from '../ui/IconBadge'
import { LuxuryCard } from '../ui/LuxuryCard'
import { Reveal } from '../ui/Reveal'
import { SectionAtmosphere } from '../layout/SectionAtmosphere'
import { SectionHeading } from '../ui/SectionHeading'

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  heart: Heart,
  compass: Compass,
  brain: Brain,
  clock: Clock,
  file: FileText,
}

const STAGGER = 75
const SECTION_DELAY = 40

export function Services() {
  return (
    <section id="services" className="section-flow section-lazy relative bg-ivory-deep/50 py-28 md:py-36 lg:py-40">
      <SectionAtmosphere variant="ivory" position="both" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <SectionHeading
          revealDelay={SECTION_DELAY}
          label="Consultations"
          title="Private Astromedical Services"
          subtitle="Each engagement is conducted with clinical discretion, structured observation, and research-grade chart analysis."
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <Reveal key={service.title} soft delay={200 + i * STAGGER}>
                <LuxuryCard variant="ivory" className="relative h-full overflow-hidden p-8 md:p-9">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gold/[0.04]"
                    aria-hidden
                  />
                  <IconBadge icon={Icon} className="mb-7" />
                  <h3 className="font-serif text-xl text-navy md:text-2xl">{service.title}</h3>
                  <p className="mt-4 text-sm leading-[1.75] text-navy/62">{service.description}</p>
                  <div className="card-accent-line mt-8" aria-hidden />
                </LuxuryCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
