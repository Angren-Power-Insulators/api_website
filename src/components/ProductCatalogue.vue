<template>
  <div>
    <!-- Page header -->
    <section class="catalogue-header">
      <v-container class="py-10 py-md-14 text-center">
        <h1 class="text-h4 text-md-h3 font-weight-bold text-white mb-3">
          {{ t('catalogue.title') }}
        </h1>
        <p class="text-body-1 mx-auto mb-8" style="max-width: 620px; color: rgba(255,255,255,.82)">
          {{ t('catalogue.description') }}
        </p>

        <v-text-field
          v-model="search"
          bg-color="white"
          class="mx-auto"
          clearable
          density="comfortable"
          hide-details
          :placeholder="t('catalogue.search')"
          prepend-inner-icon="mdi-magnify"
          rounded="lg"
          style="max-width: 480px"
        />
      </v-container>
    </section>

    <v-container class="py-8 py-md-12">
      <!-- Result count -->
      <div class="text-body-2 text-medium-emphasis mb-4">
        {{ t('catalogue.resultsCount', { count: filteredProducts.length }) }}
      </div>

      <!-- Product Grid -->
      <v-row v-if="filteredProducts.length" dense>
        <v-col
          v-for="product in filteredProducts"
          :key="product.id"
          cols="12"
          lg="3"
          md="4"
          sm="6"
        >
          <v-card
            class="product-card hover-lift d-flex flex-column h-100"
            :to="`/catalogue/${product.id}`"
            variant="outlined"
          >
            <div class="product-card-image">
              <v-img
                :alt="product.name"
                height="190"
                :src="product.image"
              />
            </div>

            <v-card-title class="text-body-1 font-weight-medium">
              {{ product.name }}
            </v-card-title>

            <v-card-subtitle class="text-wrap">
              {{ product.short }}
            </v-card-subtitle>

            <v-spacer />

            <v-card-text class="d-flex align-center justify-space-between pt-2">
              <strong class="text-primary text-body-1">{{ product.price }} {{ t('common.currency') }}</strong>
              <v-btn color="primary" size="small" variant="tonal">
                {{ t('catalogue.viewDetails') }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Empty state -->
      <div v-else class="text-center py-16">
        <v-icon class="mb-4" color="grey-lighten-1" size="64">mdi-package-variant-closed</v-icon>
        <div class="text-h6 text-medium-emphasis">{{ t('catalogue.noResults') }}</div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import { useLocalizedProducts } from '@/composables/useLocalizedProducts'
import { usePageSeo } from '@/composables/usePageSeo'
import { SITE_URL } from '@/constants'

const { t } = useI18n()
const { localizedProducts } = useLocalizedProducts()

const search = ref('')
const filteredProducts = computed(() => {
  const query = search.value?.trim().toLowerCase()
  if (!query) return localizedProducts.value
  return localizedProducts.value.filter(product =>
    `${product.name} ${product.short}`.toLowerCase().includes(query)
  )
})

usePageSeo(() => ({
  title: t('catalogue.title'),
  description: t('catalogue.description'),
  path: '/catalogue',
}))

useHead(() => ({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('nav.home'), item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: t('nav.catalogue'), item: `${SITE_URL}/catalogue` },
        ],
      }),
    },
  ],
}))
</script>

<style scoped>
.catalogue-header {
  background: linear-gradient(135deg, #0D2E7A 0%, #1D4ED8 100%);
}

.product-card-image {
  background: linear-gradient(180deg, #F5F7FA 0%, #ECEFF3 100%);
  padding: 8px;
}
</style>
