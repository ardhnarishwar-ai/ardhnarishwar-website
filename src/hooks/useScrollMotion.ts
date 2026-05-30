import { useEffect } from 'react'

/**
 * Sets --scroll-y on <html> for transform-only parallax (one passive listener).
 * Disabled when prefers-reduced-motion.
 */
export function useScrollMotion() {
  useEffect(() => {
    const root = document.documentElement
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const apply = () => {
      if (mq.matches) {
        root.style.removeProperty('--scroll-y')
        return
      }
      root.style.setProperty('--scroll-y', `${window.scrollY}`)
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        apply()
        ticking = false
      })
    }

    const onMotionChange = () => apply()

    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    mq.addEventListener('change', onMotionChange)

    return () => {
      window.removeEventListener('scroll', onScroll)
      mq.removeEventListener('change', onMotionChange)
      root.style.removeProperty('--scroll-y')
    }
  }, [])
}
