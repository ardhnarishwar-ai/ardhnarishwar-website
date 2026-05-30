type AtmosphereVariant = 'ivory' | 'warm' | 'deep' | 'navy-fade'

interface SectionAtmosphereProps {
  variant?: AtmosphereVariant
  position?: 'top' | 'bottom' | 'both'
}

/** Nearly invisible editorial lighting — no layout impact */
export function SectionAtmosphere({
  variant = 'ivory',
  position = 'top',
}: SectionAtmosphereProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {(position === 'top' || position === 'both') && (
        <div
          className={`atmosphere-glow atmosphere-parallax atmosphere-glow--${variant} atmosphere-glow--top`}
        />
      )}
      {(position === 'bottom' || position === 'both') && (
        <div
          className={`atmosphere-glow atmosphere-parallax atmosphere-parallax--light atmosphere-glow--${variant} atmosphere-glow--bottom`}
        />
      )}
    </div>
  )
}
