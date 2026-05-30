import { useEffect, useState } from 'react'

/**
 * Tracks which page section is most visible for navbar highlighting.
 * Uses a single IntersectionObserver — lightweight, no animation libraries.
 */
export function useActiveSection(sectionIds: readonly string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const visibility = new Map<string, number>()

    const pickActive = () => {
      let bestId = sectionIds[0]
      let bestRatio = 0

      for (const id of sectionIds) {
        const ratio = visibility.get(id) ?? 0
        if (ratio > bestRatio) {
          bestRatio = ratio
          bestId = id
        }
      }

      if (bestRatio > 0.05) {
        setActive(bestId)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          visibility.set(id, entry.intersectionRatio)
        }
        pickActive()
      },
      {
        rootMargin: '-18% 0px -52% 0px',
        threshold: [0, 0.08, 0.15, 0.3, 0.5],
      },
    )

    for (const el of elements) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
