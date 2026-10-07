import type { SVGProps } from 'react'

export function InstagramIcon({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) {
  const id = 'instagram-gradient'
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} {...props}>
      <defs>
        <linearGradient id={id} x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F58529" />
          <stop offset="0.45" stopColor="#DD2A7B" />
          <stop offset="0.75" stopColor="#8134AF" />
          <stop offset="1" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="12" cy="12" r="4.25" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill={`url(#${id})`} />
    </svg>
  )
}

export function WhatsAppIcon({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} {...props}>
      <path
        fill="#25D366"
        d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.9-1.3A9.5 9.5 0 1 0 12 2.5Z"
      />
      <path
        fill="#fff"
        d="M16.6 13.8c-.25-.14-1.47-.8-1.7-.9-.23-.08-.4-.14-.57.14-.17.25-.65.9-.8 1.08-.15.18-.3.2-.56.07-.25-.14-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.4.11-.53.12-.12.25-.3.37-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.46-.06-.14-.57-1.37-.78-1.87-.2-.48-.4-.42-.57-.43h-.48c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.04 2.67.13.17 1.8 2.75 4.37 3.85.61.26 1.09.42 1.47.54.62.2 1.18.17 1.62.1.5-.08 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z"
      />
    </svg>
  )
}

export function GoogleMapsIcon({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width={width} height={height} {...props}>
      <path fill="#34A853" d="M24 46c0-12 12-17.7 12-29A12 12 0 0 0 12 17c0 11.3 12 17 12 29Z" />
      <path fill="#4285F4" d="M12.7 7.7A12 12 0 0 1 24 5c4.1 0 7.8 2.1 10 5.2L24 24 12.7 7.7Z" />
      <path fill="#EA4335" d="M12.7 7.7A12 12 0 0 0 12 17c0 3.1 1.1 6 2.7 8.4L24 24 12.7 7.7Z" />
      <path fill="#FBBC04" d="M14.7 25.4 24 24l-9.3-16.3A12 12 0 0 0 12 17c0 3.1 1 5.9 2.7 8.4Z" />
      <circle cx="24" cy="17" r="4.2" fill="#fff" />
      <circle cx="24" cy="17" r="2.2" fill="#4285F4" />
    </svg>
  )
}
