import { Reveal } from './Reveal'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  id?: string
  theme?: 'light' | 'dark'
  /** Section-specific reveal pacing offset */
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
          <div
            className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
          >
            {align === 'center' && (
              <span className="hidden h-px w-12 bg-gold/50 md:block" aria-hidden />
            )}
            <p className="text-xs font-medium tracking-[0.28em] text-gold uppercase">{label}</p>
            <span className="text-gold text-[10px]" aria-hidden>
              ◆
            </span>
            {align === 'center' && (
              <span className="hidden h-px w-12 bg-gold/50 md:block" aria-hidden />
            )}
          </div>
        )}
        <h2
          className={`type-section-title font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] ${titleColor}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`type-section-lead mt-6 text-base md:text-lg md:mt-7 ${subtitleColor}`}
          >
            {subtitle}
          </p>
        )}
      </header>
    </Reveal>
  )
}
