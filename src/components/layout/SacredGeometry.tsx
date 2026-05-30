export function SacredGeometry({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute text-gold/20 ${className}`}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" />
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x2 = 200 + 180 * Math.cos(angle)
        const y2 = 200 + 180 * Math.sin(angle)
        return (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="0.35"
          />
        )
      })}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const a = (deg * Math.PI) / 180
        const x = 200 + 100 * Math.cos(a)
        const y = 200 + 100 * Math.sin(a)
        return <circle key={i} cx={x} cy={y} r="3" fill="currentColor" opacity="0.5" />
      })}
    </svg>
  )
}
