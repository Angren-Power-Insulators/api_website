import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE_URL } from '../src/constants.js'

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

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(r => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

writeFileSync(join(__dirname, '../dist/sitemap.xml'), xml)
console.log(`Generated sitemap.xml with ${allRoutes.length} URLs`)
