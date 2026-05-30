/**
 * Lightweight CSS-only sacred geometry layers for hero.
 * GPU-friendly: transform + opacity only.
 */
export function SacredGeometryBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="sacred-parallax sacred-parallax--slow absolute -right-[12%] top-[8%] h-[min(90vw,640px)] w-[min(90vw,640px)] md:-right-[6%] lg:top-[4%]">
        <div className="sacred-layer sacred-layer-primary h-full w-full">
          <SacredGeometrySvg />
        </div>
      </div>
      <div className="sacred-parallax sacred-parallax--slower absolute -left-[20%] bottom-[5%] h-[min(70vw,480px)] w-[min(70vw,480px)] opacity-60 md:-left-[10%]">
        <div className="sacred-layer sacred-layer-secondary h-full w-full">
          <SacredGeometrySvg variant="inner" />
        </div>
      </div>
      <div className="absolute right-[18%] top-[42%] h-px w-24 bg-gradient-to-r from-transparent via-gold/25 to-transparent sacred-shimmer hidden lg:block" />
    </div>
  )
}

function SacredGeometrySvg({ variant = 'full' }: { variant?: 'full' | 'inner' }) {
  const r = variant === 'inner' ? [120, 90, 60] : [180, 140, 100, 60]

  return (
    <svg
      className="h-full w-full text-gold"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {r.map((radius) => (
        <circle
          key={radius}
          cx="200"
          cy="200"
          r={radius}
          stroke="currentColor"
          strokeWidth="0.4"
        />
      ))}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const outer = variant === 'inner' ? 120 : 180
        const x2 = 200 + outer * Math.cos(angle)
        const y2 = 200 + outer * Math.sin(angle)
        return (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="0.3"
          />
        )
      })}
    </svg>
  )
}
