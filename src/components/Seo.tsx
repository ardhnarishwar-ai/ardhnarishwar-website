import { Helmet } from 'react-helmet-async'
import { BRAND } from '../data/site'
import {
  SEO,
  OG,
  SITE_URL,
  absoluteUrl,
  buildLocalBusinessSchema,
  buildWebSiteSchema,
} from '../config/seo'

const ogImage = absoluteUrl(OG.imagePath)

export function Seo() {
  const schemas = [buildWebSiteSchema(), buildLocalBusinessSchema()]

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{SEO.title}</title>
      <meta name="description" content={SEO.description} />
      <meta name="keywords" content={SEO.keywords} />
      <meta name="robots" content={SEO.robots} />
      <meta name="author" content="S. Raja" />
      <meta name="theme-color" content="#f9f5f0" />
      <link rel="canonical" href={SITE_URL} />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/images/logo.png" type="image/png" sizes="any" />
      <link rel="apple-touch-icon" href="/images/logo.png" />

      <meta property="og:site_name" content={BRAND.fullName} />
      <meta property="og:locale" content={SEO.locale} />
      <meta property="og:type" content={OG.type} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:alt" content={OG.imageAlt} />
      <meta property="og:image:width" content={String(OG.imageWidth)} />
      <meta property="og:image:height" content={String(OG.imageHeight)} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SEO.title} />
      <meta name="twitter:description" content={SEO.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={OG.imageAlt} />
      {SEO.twitterHandle ? (
        <meta name="twitter:site" content={SEO.twitterHandle} />
      ) : null}

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
