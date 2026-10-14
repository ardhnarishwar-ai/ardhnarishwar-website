import { BRAND, BUSINESS, LINKS } from '../data/site'
import { FAQ_ITEMS } from '../data/faq'

/** Production site origin — set VITE_SITE_URL in hosting dashboard */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? 'https://www.ardhnarishwar.in'
).replace(/\/+$/, '')

/** Canonical URL for the site root, including its trailing slash */
export const SITE_ROOT_URL = `${SITE_URL}/`

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

function buildOrganizationEntity() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BRAND.fullName,
    description: SEO.description,
    url: SITE_ROOT_URL,
    image: absoluteUrl('/images/logo.png'),
    logo: absoluteUrl('/images/logo.png'),
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    founder: { '@id': `${SITE_URL}/#founder` },
    sameAs: [
      LINKS.instagram,
      LINKS.googleBusiness,
      LINKS.googleMaps,
      LINKS.whatsapp,
      LINKS.youtube,
    ].filter((url) => typeof url === 'string' && url.length > 0),
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: LINKS.consultationForm,
        actionPlatform: [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/MobileWebPlatform',
        ],
      },
      name: 'Book Private Consultation',
    },
  }
}

function buildFounderEntity() {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#founder`,
    name: 'S. Raja',
    jobTitle: 'Medical Astrologer & Pattern Analyst',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    sameAs: [LINKS.instagram],
  }
}

function buildWebSiteEntity() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_ROOT_URL,
    name: BRAND.fullName,
    description: SEO.description,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  }
}

function buildFAQEntity() {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/** One connected graph; physical-address placeholders are intentionally excluded. */
export function buildStructuredDataGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationEntity(),
      buildFounderEntity(),
      buildWebSiteEntity(),
      buildFAQEntity(),
    ],
  }
}
