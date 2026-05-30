import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  className?: string
  icon?: ReactNode
  type?: 'button' | 'submit'
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'btn-luxury btn-luxury-primary bg-gradient-gold text-white shadow-luxury border border-gold-dark/30',
  outline:
    'btn-luxury btn-luxury-outline bg-transparent text-gold border border-gold/55',
  ghost: 'btn-luxury text-navy/80 hover:text-gold border border-transparent',
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium tracking-[0.04em]'

  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  )

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
