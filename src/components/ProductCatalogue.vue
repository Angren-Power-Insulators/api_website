<template>
  <v-container class="py-6">

    <!-- Page Title -->
    <h1 class="text-h5 text-md-h4 mb-6 text-center text-md-left">
      {{ t('catalogue.title') }}
    </h1>

    <!-- Product Grid -->
    <v-row dense>
      <v-col
        v-for="product in localizedProducts"
        :key="product.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
        <v-card
          class="rounded-lg d-flex flex-column h-100 bg-grey-lighten-4"
          elevation="2"
        >

          <!-- Product Image -->
          <v-img
            :alt="product.name"
            class="rounded-t-lg mt-2"
            height="180"
            :src="product.image"
          />

          <!-- Title -->
          <v-card-title class="text-center text-md-left text-body-1">
            {{ product.name }}
          </v-card-title>

          <!-- Short Description -->
          <v-card-subtitle class="text-center text-md-left">
            {{ product.short }}
          </v-card-subtitle>

          <!-- Price -->
          <v-card-text class="text-center text-md-left">
            <strong>{{ product.price }} {{ t('common.currency') }}</strong>
          </v-card-text>

          <!-- Button -->
          <v-card-actions class="mt-auto">
            <v-btn
              class="mx-auto my-2"
              color="primary"
              size="large"
              :to="`/catalogue/${product.id}`"
              variant="tonal"
            >
              {{ t('catalogue.viewDetails') }}
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import { useLocalizedProducts } from '@/composables/useLocalizedProducts'
import { usePageSeo } from '@/composables/usePageSeo'
import { SITE_URL } from '@/constants'

const { t } = useI18n()
const { localizedProducts } = useLocalizedProducts()

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
/* Extra mobile optimization */
@media (max-width: 600px) {
  .v-card-title,
  .v-card-subtitle,
  .v-card-text {
    text-align: center !important;
  }
}
</style>
