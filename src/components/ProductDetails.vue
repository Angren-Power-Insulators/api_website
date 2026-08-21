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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import products from '@/data/products.js'
import { useHead, useSeoMeta } from '@unhead/vue'
import { SITE_URL } from '@/constants'

// ---------- Load product ----------
const route = useRoute()
const { t } = useI18n()
const id = Number(route.params.id)
const product = computed(() => products.find(p => p.id === id))

// ---------- SEO META Tags ----------
const canonicalUrl = `${SITE_URL}/catalogue/${id}`

useSeoMeta(() => ({
  title: product.value?.name || 'Product',
  description: product.value?.description,
    keywords: product.value?.keywords?.join(', ') || '',
  ogTitle: product.value?.name,
  ogDescription: product.value?.description,
  ogImage: product.value?.image,
  ogType: 'product',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image'
}))

useHead(() => ({
  link: [{ rel: 'canonical', href: canonicalUrl }],
}))
</script>

