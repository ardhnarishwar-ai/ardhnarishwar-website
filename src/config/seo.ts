import { BRAND, BUSINESS, LINKS } from '../data/site'

/** Production site URL — set VITE_SITE_URL in hosting dashboard */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? 'https://www.ardhnarishwar.in'
).replace(/\/$/, '')

export const SEO = {
  title: 'Ardhnarishwar Astromedical Solutions | Wellness & Medical Astrology Consultation',
  description:
    'Private complementary wellness guidance for health, money, career, relationships, emotional well-being, life decisions, and medical astrology.',
  keywords: [
    'medical astrology',
    'astromedical solutions',
    'health and wellness guidance',
    'money and financial concerns',
    'career and work guidance',
    'stress and emotional well-being',
    'relationships and family guidance',
    'life and future guidance',
    'personal direction and decisions',
    'planetary timing',
    'wellness astrology',
    'private consultation',
    'S. Raja',
    'structured observation',
    'Ardhnarishwar',
  ].join(', '),
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  locale: 'en_IN',
  twitterHandle: '@intuitivesraja',
} as const

export const OG = {
  type: 'website',
  imagePath: '/og-image.svg',
  imageAlt: `${BRAND.fullName} — private medical astrology consultation`,
  imageWidth: 1200,
  imageHeight: 630,
} as const

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

function isValidLat(value: string): boolean {
  const n = Number(value)
  return Number.isFinite(n) && n >= -90 && n <= 90
}

function isValidLng(value: string): boolean {
  const n = Number(value)
  return Number.isFinite(n) && n >= -180 && n <= 180
}

export function buildLocalBusinessSchema() {
  const { address, hours, phone, email } = BUSINESS
  const lat = String(address.latitude)
  const lng = String(address.longitude)
  const hasGeo = isValidLat(lat) && isValidLng(lng)

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: BRAND.fullName,
    alternateName: BRAND.name,
    description: SEO.description,
    url: SITE_URL,
    image: absoluteUrl('/images/logo.png'),
    logo: absoluteUrl('/images/logo.png'),
    telephone: phone,
    email,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    ...(hasGeo
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: Number(lat),
            longitude: Number(lng),
          },
        }
      : {}),
    openingHoursSpecification: hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    serviceType: ['Complementary Wellness Consultation', 'Medical Astrology Consultation'],
    knowsAbout: [
      'Medical Astrology',
      'Health and Wellness Guidance',
      'Money and Financial Concerns',
      'Work and Career',
      'Relationships and Family',
      'Emotional Well-being',
      'Life and Future Guidance',
      'Planetary Timing',
      'Wellness Pattern Analysis',
      'Structured Observation',
    ],
    founder: {
      '@type': 'Person',
      name: 'S. Raja',
      jobTitle: 'Medical Astrologer & Pattern Analyst',
    },
    sameAs: [
      LINKS.instagram,
      LINKS.googleBusiness,
      LINKS.googleMaps,
      `https://wa.me/919111855115`,
      LINKS.youtube,
    ].filter((url) => typeof url === 'string' && url.length > 0),
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: LINKS.consultationForm,
        actionPlatform: [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/mobileWebPlatform',
        ],
      },
      name: 'Book Private Consultation',
    },
  }
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND.fullName,
    description: SEO.description,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  }
}
