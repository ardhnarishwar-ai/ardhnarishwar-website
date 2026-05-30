# Ardhnarishwar Astromedical Solutions

Premium luxury website for private clinical-style medical astrology consulting by **S. Raja**.

## Stack

- React 19 + TypeScript + Vite 8
- Tailwind CSS 4 (CSS-only motion, no Framer Motion in app)
- react-helmet-async (SEO meta)
- Lucide React icons

## Development

```bash
npm install
cp .env.example .env
npm run dev
```

## Production environment variables

| Variable | Description |
|----------|-------------|
| `VITE_SITE_URL` | Canonical domain, e.g. `https://ardhnarishwar.com` |
| `VITE_GOOGLE_FORM_EMBED_URL` | Optional `docs.google.com/forms/.../viewform?embedded=true` |

## Build & preview

```bash
npm run build
npm run preview
```

## Deploy

### Vercel

1. Import repository
2. Framework preset: **Vite**
3. Set `VITE_SITE_URL` and optional `VITE_GOOGLE_FORM_EMBED_URL`
4. `vercel.json` handles SPA routing

### Netlify

1. Build: `npm run build`, publish: `dist`
2. `netlify.toml` + `public/_redirects` for SPA fallback
3. Same environment variables in site settings

## SEO & trust checklist before launch

- [ ] Replace `BUSINESS.address` placeholders in `src/data/site.ts`
- [ ] Add latitude/longitude for `geo` in JSON-LD (or leave empty until set)
- [ ] Set `VITE_SITE_URL` to live domain
- [ ] Export **1200×630** `public/og-image.jpg` (recommended for WhatsApp/Facebook; SVG is fallback)
- [ ] Submit `sitemap.xml` in Google Search Console
- [ ] Verify Google Business Profile link and Maps URL
- [ ] Add `VITE_GOOGLE_FORM_EMBED_URL` for inline form

## Assets

- `public/images/logo.png`, `portrait.png`
- `public/og-image.svg` — social preview placeholder
- `public/favicon.svg`, `public/sitemap.xml`, `public/robots.txt`
