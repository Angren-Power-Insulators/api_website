<template>
  <v-container class="py-6">

    <!-- Page Title -->
    <h1 class="text-h5 text-md-h4 mb-6 text-center text-md-left">
      {{ t('catalogue.title') }}
    </h1>

    <!-- Product Grid -->
    <v-row dense>
      <v-col
        v-for="product in products"
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
              variant="tonal"
                 @click="openDialog(product)"
            >
              {{ t('catalogue.viewDetails') }}
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>

<v-dialog v-model="dialog" max-width="700" >
  <v-card class="pa-4">

    <!-- Close button -->
    <v-btn
      class="ml-auto mb-2"
      icon="mdi-close"
      variant="text"
      @click="dialog = false"
    />

    <v-row>
      <v-col cols="12" md="5">
        <v-img
          :alt="selectedProduct?.name"
          class="rounded-lg"
          height="200"
          :src="selectedProduct?.image"
        />
      </v-col>

      <v-col cols="12" md="7">
        <h2 class="text-h6 mb-2">{{ selectedProduct?.name }}</h2>
        <h4 class="text-h6 mb-2">{{ selectedProduct?.specifics }}</h4>

        <p>{{ selectedProduct?.description }}</p>
      </v-col>
    </v-row>

    <!-- Table -->
    <v-table class="mt-4">
      <tbody>
        <tr v-for="row in selectedProduct?.table" :key="row.label">
          <td><strong>{{ row.label }}</strong></td>
          <td>{{ row.value }}</td>
        </tr>
      </tbody>
    </v-table>

    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="dialog = false">{{ t('dialog.close') }}</v-btn>
    </v-card-actions>

  </v-card>
</v-dialog>

  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSeoMeta } from '@unhead/vue'

import products from "@/data/products.js";

const { t } = useI18n()

useSeoMeta(() => ({
  title: t('catalogue.title'),
  description: t('catalogue.description'),
  ogTitle: t('catalogue.title'),
  ogDescription: t('catalogue.description'),
}))

const dialog = ref(false)
const selectedProduct = ref(null)

function openDialog(product) {
  selectedProduct.value = product
  dialog.value = true
}
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
