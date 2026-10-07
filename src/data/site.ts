export const BRAND = {
  name: 'Ardhnarishwar',
  tagline: 'Constitutional Observation & Pattern Intelligence',
fullName: 'Ardhnarishwar Observatory',
  values: ['Healing', 'Guidance', 'Transformation', 'Insight', 'Balance', 'Well-being'],
} as const

/** Trust & local business placeholders — replace with verified production values */
export const BUSINESS = {
  phone: '+91-9111855115',
  email: 'ardhnarishwar.in@gmail.com',
  address: {
    streetAddress: '[Street Address — update from Google Business Profile]',
    addressLocality: '[City]',
    addressRegion: '[State]',
    postalCode: '[PIN Code]',
    addressCountry: 'IN',
    /** Replace with coordinates from Google Business Profile */
    latitude: '',
    longitude: '',
  },
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '18:00' },
    { days: ['Saturday'], opens: '10:00', closes: '14:00' },
  ],
} as const

export const LINKS = {
  whatsapp: 'https://wa.me/919111855115',
  instagram: 'https://instagram.com/intuitivesraja',
  googleBusiness: 'https://share.google/b1qYkSeRUTgPNHxMc',
  /** Replace with full Google Maps place URL from your Business Profile */
  googleMaps: 'https://maps.google.com/?q=Ardhnarishwar+Constitutional+Observatory',
  consultationForm: 'https://forms.gle/iNK38AsikdRCn5GB8',
  /** Optional — set URL to enable; omit from schema when empty */
  youtube: '',
} as const

/** Google Form embed — set VITE_GOOGLE_FORM_EMBED_URL in production */
export const FORM_EMBED_URL = import.meta.env.VITE_GOOGLE_FORM_EMBED_URL ?? ''

export const HERO_PILLARS = [
  { icon: 'microscope', label: 'Research Oriented' },
  { icon: 'lock', label: 'Private Consultations' },
  { icon: 'target', label: 'Structured Observation' },
  { icon: 'lotus', label: 'Wellness Pattern Analysis' },
] as const

export const SERVICES = [
  {
    title: 'Health & Wellness Guidance',
    description:
      'Personalised wellness, lifestyle, dietary, and constitutional guidance using the observatory\'s complementary framework.',
    icon: 'eye',
  },
  {
    title: 'Relationships & Family',
    description:
      'Explore recurring relationship dynamics, communication tendencies, family patterns, and personal boundaries.',
    icon: 'heart',
  },
  {
    title: 'Life, Work & Career',
    description:
      'Gain perspective on career direction, professional choices, transitions, and recurring life patterns.',
    icon: 'compass',
  },
  {
    title: 'Stress & Emotional Well-being',
    description:
      'A private, reflective space for understanding emotional patterns, reactions, and personal well-being.',
    icon: 'brain',
  },
  {
    title: 'Timing & Future Planning',
    description:
      'Structured timing-cycle perspectives for important phases, transitions, decisions, and future planning.',
    icon: 'clock',
  },
  {
    title: 'Private Personal Consultation',
    description:
      'A one-to-one consultation for concerns that do not fit neatly into a single category.',
    icon: 'file',
  },
] as const

export const PROCESS_STEPS = [
  {
    
  step: 1,
  title: 'Private Intake & Data Collection',
  description:
    'Confidential collection of birth details, personal history, constitutional observations, and primary areas of inquiry.',
},

  {
    
  step: 2,
  title: 'Pattern Mapping & Constitutional Review',
  description:
    'Structured review of constitutional indicators, recurring patterns, timing cycles, behavioral signatures, and observational findings.',
},

  {
    
  step: 3,
  title: 'Observational Intelligence Report',
  description:
    'Preparation of a detailed report highlighting recurring signatures, constitutional tendencies, timing themes, and key observations.',
},

  {
    
  step: 4,
  title: 'Private Consultation & Observational Insights',
  description:
    'One-to-one confidential consultation discussing findings, practical recommendations, and personalized guidance frameworks.',
},
] as const

export const TESTIMONIALS = [
  {
    quote:
      'The consultation felt like a private wellness institute review—not generic predictions. Every insight was structured, calm, and deeply observational.',
    author: 'Executive Client',
role: 'Personal Advisory Session',
  },
  {
    quote:
      'S. Raja decoded patterns I had never articulated. The timing-cycle observations helped me align decisions with remarkable clarity.',
    author: 'Confidential Client',
    role: 'Career & Life Direction',
  },
  {
    quote:
      'Research-oriented, discreet, and intelligent. The relationship pattern reading revealed dynamics I could finally understand and work with.',
    author: 'Anonymous Client',
    role: 'Relationship Pattern Review',
  },
] as const
