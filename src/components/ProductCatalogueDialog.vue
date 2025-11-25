<template>
  <v-container class="py-6">

    <!-- Page Title -->
    <h1 class="text-h5 text-md-h4 mb-6 text-center text-md-left">
      Каталог продукции
    </h1>

    <!-- Product Grid -->
    <v-row dense>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          elevation="2"
          class="rounded-lg d-flex flex-column h-100 bg-grey-lighten-4"
        >

          <!-- Product Image -->
          <v-img
            :src="product.image"
            height="180"
            class="rounded-t-lg mt-2"
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
            <strong>{{ product.price }} сум</strong>
          </v-card-text>

          <!-- Button -->
          <v-card-actions class="mt-auto">
            <v-btn
              color="primary"
              variant="tonal"
              class="mx-auto my-2"
              size="large"
                 @click="openDialog(product)"
            >
              Подробно
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>

<v-dialog v-model="dialog" max-width="700" >
  <v-card class="pa-4">

    <!-- Close button -->
    <v-btn
      icon="mdi-close"
      class="ml-auto mb-2"
      variant="text"
      @click="dialog = false"
    />

    <v-row>
      <v-col cols="12" md="5">
        <v-img
          :src="selectedProduct?.image"
          height="200"
          class="rounded-lg"
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
      <v-btn color="primary" @click="dialog = false">Закрыть</v-btn>
    </v-card-actions>

  </v-card>
</v-dialog>

  </v-container>
</template>

<script setup>
import { ref } from 'vue'

import products from "@/data/products.js";


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
