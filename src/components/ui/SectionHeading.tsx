import { Reveal } from './Reveal'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  id?: string
  theme?: 'light' | 'dark'
  revealDelay?: number
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  id,
  theme = 'light',
  revealDelay = 0,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleColor = theme === 'dark' ? 'text-ivory' : 'text-navy'
  const subtitleColor = theme === 'dark' ? 'text-ivory/65' : 'text-navy/70'

  return (
    <Reveal soft delay={revealDelay} className={`mb-14 max-w-3xl md:mb-20 ${alignClass}`}>
      <header id={id}>
        {label && (
          <p
            className={`mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] ${
              theme === 'dark' ? 'text-ivory/50' : 'text-navy/45'
            }`}
          >
            {label}
          </p>
        )}
        <h2
          className={`type-section-title font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] ${titleColor}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`type-section-lead mt-6 max-w-2xl text-base md:mt-7 md:text-lg ${subtitleColor}`}
          >
            {subtitle}
          </p>
        )}
      </header>
    </Reveal>
  )
}
