/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string
  readonly VITE_GOOGLE_FORM_EMBED_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
