<template>
  <v-container class="py-6">
    <v-btn
      color="primary"
      variant="text"
      class="mb-4"
      @click="$router.back()"
    >
      ← Назад
    </v-btn>

    <v-row>
      <v-col cols="12" md="5">
        <v-img
          :src="product.image"
          height="260"
          class="rounded-lg"
        />
      </v-col>

      <v-col cols="12" md="7">
        <h1 class="text-h5 mb-2">{{ product.name }}</h1>
        <h3 class="text-subtitle-1 mb-2" v-if="product.specifics">
          {{ product.specifics }}
        </h3>

        <p class="mb-4">{{ product.description }}</p>

        <strong class="text-h6">{{ product.price }} сум</strong>

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
import products from '@/data/products.js'
import { useSeoMeta } from '@unhead/vue'

// ---------- Load product ----------
const route = useRoute()
const id = Number(route.params.id)
const product = computed(() => products.find(p => p.id === id))

// ---------- SEO META Tags ----------
useSeoMeta(() => ({
  title: product.value?.name || 'Product',
  description: product.value?.description,
    keywords: product.value?.keywords?.join(', ') || '', 
  ogTitle: product.value?.name,
  ogDescription: product.value?.description,
  ogImage: product.value?.image,
  ogType: 'product',
  // Dynamic canonical URL
  ogUrl: `https://your-domain.com/product/${id}`,
  twitterCard: 'summary_large_image'
}))
</script>

