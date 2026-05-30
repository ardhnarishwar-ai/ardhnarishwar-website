import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealPhase = 'hidden' | 'running' | 'settled'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger delay in ms */
  delay?: number
  /** Run once on mount (above-the-fold hero) */
  immediate?: boolean
  /** Lighter motion for card grids */
  soft?: boolean
  /** Airflow editorial reveal (default for soft) */
  airflow?: boolean
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return reduced
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  immediate = false,
  soft = false,
  airflow,
}: RevealProps) {
  const useAirflow = airflow ?? soft
  const reducedMotion = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<RevealPhase>(immediate ? 'running' : 'hidden')

  useEffect(() => {
    if (reducedMotion) {
      setPhase('settled')
      return
    }

    if (immediate) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('running')
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate, reducedMotion])

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target !== ref.current) return
    setPhase('settled')
  }

  const phaseClass =
    phase === 'running'
      ? `reveal-run ${soft ? 'reveal-run--soft' : ''} ${useAirflow ? 'reveal-run--airflow' : ''}`
      : phase === 'settled'
        ? 'reveal-settled'
        : ''

  return (
    <div
      ref={ref}
      onAnimationEnd={handleAnimationEnd}
      className={`reveal ${phaseClass} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
