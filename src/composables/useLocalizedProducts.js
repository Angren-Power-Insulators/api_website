import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import products from '@/data/products.js'
import { DEFAULT_LOCALE } from '@/i18n'

function localize (product, locale) {
  const content = product.content[locale] || product.content[DEFAULT_LOCALE]
  return {
    id: product.id,
    category: product.category,
    price: product.price,
    image: product.image,
    ...content,
  }
}

export function useLocalizedProducts () {
  const { locale } = useI18n()
  const localizedProducts = computed(() => products.map(p => localize(p, locale.value)))
  return { localizedProducts }
}

export function useLocalizedProduct (id) {
  const { locale } = useI18n()
  const product = products.find(p => p.id === id)
  return computed(() => (product ? localize(product, locale.value) : null))
}
