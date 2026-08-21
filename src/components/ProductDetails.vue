<template>
  <v-container v-if="product" class="py-6 py-md-10">
    <!-- Breadcrumbs -->
    <v-breadcrumbs class="px-0 mb-4" :items="breadcrumbs" density="compact">
      <template #divider>
        <v-icon size="16">mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-row>
      <v-col cols="12" md="5">
        <v-sheet class="product-image-frame rounded-xl" elevation="0">
          <v-img
            :alt="product.name"
            class="rounded-xl"
            height="340"
            :src="product.image"
          />
        </v-sheet>
      </v-col>

      <v-col cols="12" md="7">
        <h1 class="text-h5 text-md-h4 font-weight-bold mb-2">{{ product.name }}</h1>
        <v-chip v-if="product.specifics" class="mb-4" color="primary" size="small" variant="tonal">
          {{ product.specifics }}
        </v-chip>

        <p class="text-body-1 text-medium-emphasis mb-6">{{ product.description }}</p>

        <div class="d-flex align-center justify-space-between flex-wrap ga-4 mb-6 price-box pa-4 rounded-lg">
          <div>
            <div class="text-caption text-medium-emphasis">{{ t('common.currency') }}</div>
            <div class="text-h5 font-weight-bold text-primary">{{ product.price }} {{ t('common.currency') }}</div>
          </div>
          <div class="d-flex ga-2">
            <v-btn color="primary" :href="`tel:${PHONE_TEL}`" prepend-icon="mdi-phone" variant="flat">
              {{ t('contacts.callNow') }}
            </v-btn>
            <v-btn
              color="success"
              :href="WHATSAPP_URL"
              icon="mdi-whatsapp"
              rel="noopener noreferrer"
              target="_blank"
              variant="tonal"
            />
          </div>
        </div>

        <v-table class="spec-table rounded-lg">
          <tbody>
            <tr v-for="row in product.table" :key="row.label">
              <td class="text-medium-emphasis">{{ row.label }}</td>
              <td class="font-weight-medium">{{ row.value }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else class="py-16 text-center">
    <v-icon class="mb-4" color="grey-lighten-1" size="64">mdi-package-variant-closed</v-icon>
    <h1 class="text-h6 mb-4">{{ t('product.notFound') }}</h1>
    <v-btn color="primary" to="/catalogue" variant="tonal">{{ t('product.back') }}</v-btn>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import { SITE_URL, PHONE_TEL, WHATSAPP_URL } from '@/constants'
import { useLocalizedProduct } from '@/composables/useLocalizedProducts'
import { usePageSeo } from '@/composables/usePageSeo'

// ---------- Load product ----------
const route = useRoute()
const { t } = useI18n()
const id = Number(route.params.id)
const product = useLocalizedProduct(id)

const breadcrumbs = computed(() => [
  { title: t('nav.home'), to: '/' },
  { title: t('nav.catalogue'), to: '/catalogue' },
  { title: product.value?.name || t('product.notFound'), disabled: true },
])

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

<style scoped>
.product-image-frame {
  background: linear-gradient(180deg, #F5F7FA 0%, #ECEFF3 100%);
  padding: 16px;
}
.price-box {
  background: #F5F7FA;
}
.spec-table :deep(tr:nth-child(odd)) {
  background: #F9FAFB;
}
.spec-table :deep(td) {
  padding: 10px 16px;
}
</style>
