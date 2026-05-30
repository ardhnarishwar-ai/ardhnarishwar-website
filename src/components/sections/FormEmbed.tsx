import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { FORM_EMBED_URL, LINKS } from '../../data/site'

const EMBED_URL = FORM_EMBED_URL

export function FormEmbed() {
  const [iframeFailed, setIframeFailed] = useState(false)
  const hasEmbed = Boolean(EMBED_URL?.includes('docs.google.com/forms'))

  if (!hasEmbed || iframeFailed) {
    return (
      <div className="flex min-h-[420px] flex-1 flex-col items-center justify-center gap-7 px-8 py-14 text-center md:py-16">
        <p className="max-w-sm text-sm leading-[1.8] text-navy/60">
          {hasEmbed
            ? 'The embedded form could not be loaded. Please open the secure consultation form directly.'
            : 'For birth time accuracy and confidential intake, complete our official Google Form. Add your embed URL via VITE_GOOGLE_FORM_EMBED_URL for inline display.'}
        </p>
        <a
          href={LINKS.consultationForm}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-luxury btn-luxury-primary inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-medium tracking-[0.04em] text-white shadow-luxury border border-gold-dark/30"
        >
          Open Full Consultation Form
          <ExternalLink size={16} />
        </a>
      </div>
    )
  }

  return (
    <div className="form-embed-wrap relative min-h-[420px] flex-1 bg-ivory">
      <iframe
        title="Ardhnarishwar — Private Consultation Intake Form"
        src={EMBED_URL}
        className="form-embed-iframe absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onError={() => setIframeFailed(true)}
      />
      <noscript>
        <div className="flex h-full min-h-[420px] items-center justify-center p-8 text-center">
          <a
            href={LINKS.consultationForm}
            className="text-gold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open consultation form
          </a>
        </div>
      </noscript>
    </div>
  )
}
