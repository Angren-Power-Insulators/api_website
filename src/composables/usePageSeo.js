import { useHead, useSeoMeta } from '@unhead/vue'
import { SITE_URL } from '@/constants'

const DEFAULT_IMAGE = new URL('@/assets/factory/multi_ipu.webp', import.meta.url).href

/**
 * Sets title/description, Open Graph, Twitter Card and canonical link tags
 * for a page. Accepts a getter so values stay reactive to locale changes.
 */
export function usePageSeo (getOptions) {
  const resolve = () => (typeof getOptions === 'function' ? getOptions() : getOptions)

  // useSeoMeta only resolves reactivity per-field (each value may be a getter),
  // not by wrapping the whole input object in an outer function.
  useSeoMeta({
    title: () => resolve().title,
    description: () => resolve().description,
    ogTitle: () => resolve().title,
    ogDescription: () => resolve().description,
    ogUrl: () => `${SITE_URL}${resolve().path}`,
    ogImage: () => resolve().image || DEFAULT_IMAGE,
    ogType: () => resolve().type || 'website',
    ogSiteName: 'Angren Power Insulators',
    twitterCard: 'summary_large_image',
  })

  useHead(() => ({
    link: [{ rel: 'canonical', href: `${SITE_URL}${resolve().path}` }],
  }))
}
