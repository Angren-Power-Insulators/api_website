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
          class="rounded-lg d-flex flex-column h-100"
        >

          <!-- Product Image -->
          <v-img
            :src="product.image"
            height="180"
            class="rounded-t-lg"
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
              :to="`/catalogue/${product.id}`"
            >
              Подробнее
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Изолятор ТФ-20",
    short: "Линейный штыревый фарфоровый изолятор.",
    price: "49 000",
    image: new URL("@/assets/products/tf_20.png", import.meta.url).href

  },
  {
    id: 2,
    name: "Изолятор ТФ-20-01",
    short: "Для ЛЭП до 1 кВ.",
    price: "55 000",
    image: "/images/products/tf20_01.jpg"
  },
  {
    id: 3,
    name: "Изолятор ТФ-70",
    short: "Высокопрочный фарфоровый изолятор.",
    price: "85 000",
    image: "/images/products/tf70.jpg"
  },
  // Add all your remaining products...
]
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
