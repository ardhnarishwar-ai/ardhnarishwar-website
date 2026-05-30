import type { LucideIcon } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>

interface IconBadgeProps {
  icon: IconComponent
  className?: string
}

export function IconBadge({ icon: Icon, className = '' }: IconBadgeProps) {
  return (
    <div
      className={`icon-badge flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${className}`}
    >
      <Icon className="h-[22px] w-[22px] text-gold" strokeWidth={1.25} aria-hidden />
    </div>
  )
}
