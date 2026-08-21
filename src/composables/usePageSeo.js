import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { SITE_URL, SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/constants'
import { localizedPath } from '@/utils/localePath'

const DEFAULT_IMAGE = new URL('@/assets/factory/multi_ipu.webp', import.meta.url).href

/**
 * Sets title/description, Open Graph, Twitter Card, canonical and hreflang
 * link tags for a page. `getOptions().path` must be the locale-neutral path
 * (e.g. "/catalogue") — this localizes it for the current locale's canonical
 * URL and builds the ru/en/uz/x-default alternates from it.
 * Accepts a getter so values stay reactive to locale/route changes.
 */
export function usePageSeo (getOptions) {
  const resolve = () => (typeof getOptions === 'function' ? getOptions() : getOptions)
  const { locale } = useI18n()

  const localeUrl = loc => `${SITE_URL}${localizedPath(resolve().path, loc)}`

  // useSeoMeta only resolves reactivity per-field (each value may be a getter),
  // not by wrapping the whole input object in an outer function.
  useSeoMeta({
    title: () => resolve().title,
    description: () => resolve().description,
    ogTitle: () => resolve().title,
    ogDescription: () => resolve().description,
    ogUrl: () => localeUrl(locale.value),
    ogImage: () => resolve().image || DEFAULT_IMAGE,
    ogType: () => resolve().type || 'website',
    ogSiteName: 'Angren Power Insulators',
    twitterCard: 'summary_large_image',
  })

  useHead(() => ({
    link: [
      { rel: 'canonical', href: localeUrl(locale.value) },
      ...SUPPORTED_LOCALES.map(loc => ({ rel: 'alternate', hreflang: loc, href: localeUrl(loc) })),
      { rel: 'alternate', hreflang: 'x-default', href: localeUrl(DEFAULT_LOCALE) },
    ],
  }))
}
