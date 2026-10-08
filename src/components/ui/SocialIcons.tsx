import type { SVGProps } from 'react'

export function InstagramIcon({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) {
  const id = 'instagram-gradient'
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} {...props}>
      <defs><linearGradient id={id} x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#F58529" /><stop offset="0.45" stopColor="#DD2A7B" /><stop offset="0.75" stopColor="#8134AF" /><stop offset="1" stopColor="#515BD4" /></linearGradient></defs>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="12" cy="12" r="4.25" fill="none" stroke={`url(#${id})`} strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill={`url(#${id})`} />
    </svg>
  )
}

export function WhatsAppIcon({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} {...props}>
      <path fill="#25D366" d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.9-1.3A9.5 9.5 0 1 0 12 2.5Z" />
      <path fill="#fff" d="M16.6 13.8c-.25-.14-1.47-.8-1.7-.9-.23-.08-.4-.14-.57.14-.17.25-.65.9-.8 1.08-.15.18-.3.2-.56.07-.25-.14-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.4.11-.53.12-.12.25-.3.37-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.46-.06-.14-.57-1.37-.78-1.87-.2-.48-.4-.42-.57-.43h-.48c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.04 2.67.13.17 1.8 2.75 4.37 3.85.61.26 1.09.42 1.47.54.62.2 1.18.17 1.62.1.5-.08 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  )
}


export function GoogleBusinessIcon({ width = 30, height = 30, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width={width} height={height} {...props}>
      <rect x="6" y="5" width="36" height="38" rx="5" fill="#4285F4" />
      <path fill="#8AB4F8" d="M6 5h36l-3.2 14H9.2L6 5Z" />
      <path fill="#5F73C6" d="M15 5h9v14h-9zM33 5h9l-3.2 14h-9z" />
      <circle cx="24" cy="32" r="8.5" fill="#fff" />
      <path fill="#4285F4" d="M24 24a8.5 8.5 0 0 0 0 17h5.8v-4.6H24a3.9 3.9 0 1 1 3.5-5.6h5.2A8.6 8.6 0 0 0 24 24Z" />
    </svg>
  )
}

export function ChromeIcon({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width={width} height={height} {...props}>
      <path fill="#EA4335" d="M24 3a21 21 0 0 1 18.2 10.5L31 21H24a7 7 0 0 0-6.1 3.5L11 13.2A21 21 0 0 1 24 3Z"/>
      <path fill="#FBBC04" d="M5.8 13.5A21 21 0 0 0 24 45l7.8-13.5A8.9 8.9 0 0 1 24 36a12 12 0 0 1-10.4-6L5.8 13.5Z"/>
      <path fill="#34A853" d="M24 45a21 21 0 0 0 18.2-31.5L31 21a7 7 0 0 1-1.2 10.5L24 45Z"/>
      <circle cx="24" cy="24" r="9" fill="#4285F4"/><circle cx="24" cy="24" r="5" fill="#fff"/>
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
      <circle cx="24" cy="17" r="4.2" fill="#fff" /><circle cx="24" cy="17" r="2.2" fill="#4285F4" />
    </svg>
  )
}

export function GmailIcon({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 36" width={width} height={height} {...props}>
      <path fill="#4285F4" d="M4 7v24c0 2.2 1.8 4 4 4h5V13L4 7Z" />
      <path fill="#34A853" d="M35 13v22h5c2.2 0 4-1.8 4-4V7l-9 6Z" />
      <path fill="#EA4335" d="M4 7 24 22 44 7c0-2.2-1.8-4-4-4H8C5.8 3 4 4.8 4 7Z" />
      <path fill="#FBBC04" d="M4 7v1l20 15L44 8V7L24 22 4 7Z" />
    </svg>
  )
}

export function GoogleFormsIcon({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} {...props}>
      <path fill="#673AB7" d="M5 2h10l4 4v16H5Z" /><path fill="#9575CD" d="M15 2v5h4Z" />
      <circle cx="8.5" cy="11" r="1" fill="#fff" /><rect x="11" y="10" width="5" height="2" rx="1" fill="#fff" />
      <circle cx="8.5" cy="15" r="1" fill="#fff" /><rect x="11" y="14" width="5" height="2" rx="1" fill="#fff" />
      <circle cx="8.5" cy="19" r="1" fill="#fff" /><rect x="11" y="18" width="5" height="2" rx="1" fill="#fff" />
    </svg>
  )
}

export function PhoneIcon({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#1976D2" />
      <path fill="#fff" d="M8.2 6.8c.5-.3 1.1-.1 1.4.4l1.2 2.1c.25.45.16 1-.22 1.35l-.9.82c.75 1.2 1.7 2.1 2.9 2.85l.8-.9c.35-.38.9-.48 1.35-.22l2.1 1.2c.5.3.7.9.4 1.4l-.45.8c-.35.62-1.05.95-1.75.8-2.25-.5-4.35-1.8-6.1-3.55-1.75-1.75-3.05-3.85-3.55-6.1-.15-.7.18-1.4.8-1.75Z" />
    </svg>
  )
}
