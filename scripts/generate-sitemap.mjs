import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE_URL, SUPPORTED_LOCALES, DEFAULT_LOCALE } from '../src/constants.js'
import { localizedPath } from '../src/utils/localePath.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Read product ids directly from source text rather than importing the module,
// since products.js resolves image URLs via Vite's `@` alias which only exists
// inside Vite's own build pipeline, not under plain Node.
const productsSource = readFileSync(join(__dirname, '../src/data/products.js'), 'utf-8')
const productIds = [...productsSource.matchAll(/id:\s*(\d+)/g)].map(m => Number(m[1]))

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/catalogue', changefreq: 'weekly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.6' },
  { path: '/contacts', changefreq: 'monthly', priority: '0.6' },
]

const productRoutes = productIds.map(id => ({
  path: `/catalogue/${id}`,
  changefreq: 'monthly',
  priority: '0.8',
}))

const lastmod = new Date().toISOString().split('T')[0]
const allRoutes = [...staticRoutes, ...productRoutes]

// Every locale-neutral route gets one <url> entry per locale (ru unprefixed,
// en/uz under their prefix), each listing all locales as hreflang alternates
// (including a self-reference, per Google's guidance) plus x-default.
const urlEntries = allRoutes.flatMap(route =>
  SUPPORTED_LOCALES.map(locale => {
    const alternates = [
      ...SUPPORTED_LOCALES.map(altLocale => ({ hreflang: altLocale, href: `${SITE_URL}${localizedPath(route.path, altLocale)}` })),
      { hreflang: 'x-default', href: `${SITE_URL}${localizedPath(route.path, DEFAULT_LOCALE)}` },
    ]

    return `  <url>
    <loc>${SITE_URL}${localizedPath(route.path, locale)}</loc>
${alternates.map(a => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`).join('\n')}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  })
)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>
`

writeFileSync(join(__dirname, '../dist/sitemap.xml'), xml)
console.log(`Generated sitemap.xml with ${urlEntries.length} URLs (${allRoutes.length} pages x ${SUPPORTED_LOCALES.length} locales)`)
