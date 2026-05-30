import type { ElementType, ReactNode } from 'react'

type CardVariant = 'ivory' | 'frost' | 'glass-dark'

interface LuxuryCardProps {
  children: ReactNode
  className?: string
  variant?: CardVariant
  as?: ElementType
}

const variantClass: Record<CardVariant, string> = {
  ivory: 'card-luxury--ivory',
  frost: 'card-luxury--frost',
  'glass-dark': 'card-luxury--glass-dark',
}

export function LuxuryCard({
  children,
  className = '',
  variant = 'ivory',
  as: Component = 'article',
}: LuxuryCardProps) {
  return (
    <Component className={`card-luxury ${variantClass[variant]} ${className}`}>
      {children}
    </Component>
  )
}
