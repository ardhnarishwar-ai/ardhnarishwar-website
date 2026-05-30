export const BRAND = {
  name: 'Ardhnarishwar',
  tagline: 'Astromedical Solutions',
  fullName: 'Ardhnarishwar Astromedical Solutions',
  values: ['Healing', 'Guidance', 'Transformation', 'Insight', 'Balance', 'Well-being'],
} as const

/** Trust & local business placeholders — replace with verified production values */
export const BUSINESS = {
  phone: '+91-9111855115',
  email: 'consult@ardhnarishwar.com',
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
  googleMaps: 'https://maps.google.com/?q=Ardhnarishwar+Astromedical+Solutions',
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
    title: 'Medical Astrology Consultation',
    description:
      'Clinical mapping of planetary patterns against health tendencies, timing windows, and observational wellness markers.',
    icon: 'activity',
  },
  {
    title: 'Relationship Pattern Reading',
    description:
      'Structured analysis of relational dynamics, attachment patterns, and compatibility through chart geometry.',
    icon: 'heart',
  },
  {
    title: 'Career & Life Direction Analysis',
    description:
      'Directional insight into vocation, reputation cycles, and life-path alignment through house and planetary study.',
    icon: 'compass',
  },
  {
    title: 'Psychological & Emotional Pattern Analysis',
    description:
      'Root-cause oriented reading of emotional landscapes, instinctual responses, and psychological pattern signatures.',
    icon: 'brain',
  },
  {
    title: 'Planetary Timing Guidance',
    description:
      'Precise transit and dasha observation for decision windows, recovery phases, and strategic life transitions.',
    icon: 'clock',
  },
  {
    title: 'Wellness Observation Reports',
    description:
      'Documented pattern reports integrating lifestyle observation, planetary timing, and structured wellness notes.',
    icon: 'file',
  },
] as const

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Fill Consultation Form',
    description:
      'Share birth details, concerns, and observational history through our secure private intake form.',
  },
  {
    step: 2,
    title: 'Pattern Observation & Chart Study',
    description:
      'In-depth chart analysis, house mapping, aspect geometry, and multi-layer pattern observation.',
  },
  {
    step: 3,
    title: 'Structured Analysis Session',
    description:
      'A focused private session presenting findings with clinical clarity and structured interpretation.',
  },
  {
    step: 4,
    title: 'Personalized Guidance',
    description:
      'Actionable timing guidance, lifestyle observation notes, and confidential follow-up recommendations.',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'The consultation felt like a private wellness institute review—not generic predictions. Every insight was structured, calm, and deeply observational.',
    author: 'Private Client',
    role: 'Executive Wellness Consultation',
  },
  {
    quote:
      'S. Raja decoded patterns I had never articulated. The planetary timing guidance helped me align decisions with remarkable clarity.',
    author: 'Confidential Client',
    role: 'Career & Life Direction',
  },
  {
    quote:
      'Research-oriented, discreet, and intelligent. The relationship pattern reading revealed dynamics I could finally understand and work with.',
    author: 'Anonymous Client',
    role: 'Relationship Pattern Analysis',
  },
] as const
