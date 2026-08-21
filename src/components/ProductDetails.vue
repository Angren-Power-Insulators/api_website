<template>
  <v-container class="py-6">
    <v-btn
      class="mb-4"
      color="primary"
      variant="text"
      @click="$router.back()"
    >
      ← {{ t('product.back') }}
    </v-btn>

    <v-row>
      <v-col cols="12" md="5">
        <v-img
          :alt="product.name"
          class="rounded-lg"
          height="260"
          :src="product.image"
        />
      </v-col>

      <v-col cols="12" md="7">
        <h1 class="text-h5 mb-2">{{ product.name }}</h1>
        <h3 v-if="product.specifics" class="text-subtitle-1 mb-2">
          {{ product.specifics }}
        </h3>

        <p class="mb-4">{{ product.description }}</p>

        <strong class="text-h6">{{ product.price }} {{ t('common.currency') }}</strong>

        <v-table class="mt-6">
          <tbody>
            <tr v-for="row in product.table" :key="row.label">
              <td><strong>{{ row.label }}</strong></td>
              <td>{{ row.value }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import { SITE_URL } from '@/constants'
import { useLocalizedProduct } from '@/composables/useLocalizedProducts'
import { usePageSeo } from '@/composables/usePageSeo'

// ---------- Load product ----------
const route = useRoute()
const { t } = useI18n()
const id = Number(route.params.id)
const product = useLocalizedProduct(id)

// ---------- SEO META Tags ----------
usePageSeo(() => ({
  title: product.value?.name || t('product.notFound'),
  description: product.value?.description,
  path: `/catalogue/${id}`,
  image: product.value?.image,
  type: 'product',
}))

useHead(() => {
  if (!product.value) return {}

  const priceAmount = Number(String(product.value.price).replace(/\D/g, ''))

  return {
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.value.name,
          description: product.value.description,
          image: product.value.image,
          sku: String(id),
          brand: { '@type': 'Brand', name: 'Angren Power Insulators' },
          offers: {
            '@type': 'Offer',
            url: `${SITE_URL}/catalogue/${id}`,
            priceCurrency: 'UZS',
            price: priceAmount,
            availability: 'https://schema.org/InStock',
          },
        }),
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t('nav.home'), item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: t('nav.catalogue'), item: `${SITE_URL}/catalogue` },
            { '@type': 'ListItem', position: 3, name: product.value.name, item: `${SITE_URL}/catalogue/${id}` },
          ],
        }),
      },
    ],
  }
})
</script>

