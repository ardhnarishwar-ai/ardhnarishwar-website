import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { width?: number | string; height?: number | string }

function OriginalIcon({ src, width = 24, height = 24, alt, className = '' }: { src: string; width?: number | string; height?: number | string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={`object-contain ${className}`}
    />
  )
}

export function InstagramIcon({ width = 24, height = 24 }: IconProps) {
  return <OriginalIcon src="/images/Instagram_icon.png (1).webp" width={width} height={height} alt="Instagram" />
}

export function WhatsAppIcon({ width = 24, height = 24 }: IconProps) {
  return <OriginalIcon src="/images/PngItem_93513.png" width={width} height={height} alt="WhatsApp" />
}

export function GoogleBusinessIcon({ width = 30, height = 30 }: IconProps) {
  return <OriginalIcon src="/images/What-is-Google-My-Business-1107x1536.png" width={width} height={height} alt="Google Business Profile" />
}

export function ChromeIcon({ width = 24, height = 24 }: IconProps) {
  return <OriginalIcon src="/images/Google-Chrome-Logo-for-tech-themed-designs-web-development-graphics-transparent-PNG-image.png" width={width} height={height} alt="Google Chrome" />
}

export function GoogleMapsIcon({ width = 24, height = 24 }: IconProps) {
  return <OriginalIcon src="/images/google-logo-g-suite-google-9820d64d83b313b7a901dcc7f16052ee6.png" width={width} height={height} alt="Google Maps" />
}

export function GmailIcon({ width = 24, height = 24 }: IconProps) {
  return <OriginalIcon src="/images/Gmail_Logo_512px (1).png" width={width} height={height} alt="Gmail" />
}

export function GoogleFormsIcon({ width = 24, height = 24 }: IconProps) {
  return <OriginalIcon src="/images/Google_Forms_Logo_512px.png" width={width} height={height} alt="Google Forms" />
}

export function PhoneIcon({ width = 24, height = 24 }: IconProps) {
  return <OriginalIcon src="/images/613c50a2139fe39023df9d6f476d78d3.png" width={width} height={height} alt="Phone" />
}
