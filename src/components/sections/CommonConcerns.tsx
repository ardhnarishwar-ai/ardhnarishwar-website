import {
  HeartPulse,
  WalletCards,
  BriefcaseBusiness,
  Brain,
  HeartHandshake,
  Compass,
  Sparkles,
  CircleHelp,
  ArrowUpRight,
} from 'lucide-react'

const concerns = [
  {
    title: 'Health & Wellness',
    text: 'Personal wellness, lifestyle, diet, and constitutional guidance.',
    icon: HeartPulse,
  },
  {
    title: 'Money & Financial Concerns',
    text: 'Reflection on financial decision patterns and timing — not financial advice.',
    icon: WalletCards,
  },
  {
    title: 'Work & Career',
    text: 'Career direction, professional choices, transitions, and timing.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Stress, Anxiety & Emotional Well-being',
    text: 'A private space to explore emotional patterns and personal well-being.',
    icon: Brain,
  },
  {
    title: 'Relationships & Family',
    text: 'Understanding recurring relationship dynamics and family patterns.',
    icon: HeartHandshake,
  },
  {
    title: 'Life & Future Guidance',
    text: 'Life direction, important phases, choices, and future planning.',
    icon: Compass,
  },
  {
    title: 'Personal Direction & Decisions',
    text: 'Clarity when you are facing an important personal decision.',
    icon: Sparkles,
  },
  {
    title: 'Something Else',
    text: 'Have a different concern? Tell us what you would like to understand.',
    icon: CircleHelp,
  },
] as const

export function CommonConcerns() {
  return (
    <section id="concerns" className="observatory-section observatory-common-concerns">
      <div className="observatory-container">
        <div className="observatory-section-intro">
          <div>
            <p className="observatory-eyebrow">START WITH YOUR CONCERN</p>
            <h2>What brings you here?<br /><em>You do not need to know astrology.</em></h2>
          </div>
          <p>
            Start with the problem or question that matters to you. The deeper
            observation framework comes later — the first step should feel simple.
          </p>
        </div>

        <div className="grid gap-px border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {concerns.map(({ title, text, icon: Icon }) => (
            <a
              key={title}
              href="#contact"
              className="group flex min-h-[190px] flex-col bg-[#f9f7f2] p-6 transition-colors hover:bg-white md:p-7"
            >
              <Icon className="h-5 w-5 text-gold" strokeWidth={1.35} aria-hidden />
              <h3 className="mt-6 font-serif text-[1.35rem] leading-tight text-navy">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-navy/58">{text}</p>
              <span className="mt-auto flex items-center gap-2 pt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy/45 transition-colors group-hover:text-gold">
                Explore <ArrowUpRight size={13} strokeWidth={1.4} aria-hidden />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-4 text-center text-[8px] leading-3.5 text-navy/35">
          Health and emotional well-being guidance is complementary and educational, it is not a substitute for diagnosis or treatment by a qualified medical professional.
        </p>
      </div>
    </section>
  )
}
