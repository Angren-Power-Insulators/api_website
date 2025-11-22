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
              Подробнее
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
<v-dialog v-model="dialog" max-width="700">
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


const products = [
  {
    id: 1,
    name: "Изолятор ИПУ 10/630",
    specifics: "Овальный фланец",
    short: "Проходной изолятор (для наружной установки) ",
    price: "199 000",
    image: new URL("@/assets/products/ipu_630.png", import.meta.url).href,
    description:
      `Фарфоровый изолятор проходной (для наружной установки) служит 
      проводником и изолятором в закрытых распределительных устройствах электростанций и подстанций, 
      а также для соединения с ЛЭП (более 1000 В, ~100 Гц).`,
    table: [
      { label: "Номинальное напряжение", value: "10 кВ" },
      { label: "Номинальный ток", value: "630А" },
      { label: "Минимальная разрушающая сила на изгиб", value: "7.5 кН" },
      { label: "Длина пути утечки (не менее)", value: "30 см" },
      { label: "Масса", value: "7 кг" }
    ],
  },
  {
    id: 2,
    name: "Изолятор ИПУ 10/1000",
    specifics: "Квадратный фланец",
    short: "Изолятор проходной (для наружной установки) ",
    price: "249 000",
    image: new URL("@/assets/products/ipu_1000.png", import.meta.url).href,
    description:
      `Фарфоровый изолятор проходной (для наружной установки) служит 
      проводником и изолятором в закрытых распределительных устройствах электростанций и подстанций, 
      а также для соединения с ЛЭП (более 1000 В, ~100 Гц).`,    
    table: [
      { label: "Номинальное напряжение", value: "10 кВ" },
      { label: "Номинальный ток", value: "1000A" },
      { label: "Минимальная разрушающая сила на изгиб", value: "7.5 кН" },
      { label: "Длина пути утечки (не менее)", value: "30 см" },
      { label: "Масса", value: "8 кг" }
    ],
  },
  {
    id: 3,
    name: "Изолятор ШФ-20Г",
    short: "Штыревой фарфоровый изолятор",
    price: "49 900",
    image: new URL("@/assets/products/shf_20.png", import.meta.url).href,
    description:
      `Изоляторы фарфоровые штыревые ШФ-20Г предназначены для изолированного 
      крепления проводов к опорам ЛЭП и распределительных устройствах электростанций и 
      подстанций с переменной частотой тока до 100 Гц`,    
    table: [
      { label: "Номинальное напряжение", value: "20 кВ" },
      { label: "Длина пути утечки", value: "400мм" },
      { label: "Минимальная разрушающая сила", value: "13 кН" },
      { label: "Пробивное напряжение в изоляционной среде", value: "не менее 180 кВ" },
      { label: "Масса", value: "3.4 кг" }
    ],
  },
  {
    id: 4,
    name: "Изолятор ШФ-10МО",
    short: "Штыревой фарфоровый изолятор",
    price: "19 900",
    image: new URL("@/assets/products/shf_20.png", import.meta.url).href,    description:
      `Изоляторы фарфоровые штыревые ШФ-10МО предназначены для изолированного 
      крепления проводов к опорам ЛЭП и распределительных устройствах электростанций и 
      подстанций с переменной частотой тока до 100 Гц`,    
    table: [
      { label: "Номинальное напряжение", value: "10 кВ" },
      { label: "Длина пути утечки", value: "260мм" },
      { label: "Минимальная разрушающая сила", value: "12.5 кН" },
      { label: "Пробивное напряжение в изоляционной среде", value: "120 кВ" },
      { label: "Масса", value: "1.6 кг" }
    ],
  },
    {
    id: 5,
    name: "Изолятор C4-80 II УХЛ1",
    short: "Штыревой фарфоровый изолятор",
    price: "84 000",
    image: new URL("@/assets/products/s4.webp", import.meta.url).href,    description:
      `Фарфоровый  изолятор опорный стержневой С4-80-II предназначен для работы в электрооборудовании переменного 
      тока напряжением до 10 кВ частотой до 100 Гц.
    Применяются в высоковольтных разъединителях и выключателях распределительных устройств.`,    
    table: [
      { label: "Номинальное напряжение", value: "10 кВ" },
      { label: "Длина пути утечки", value: "не менее 300мм" },
      { label: "Минимальная разрушающая сила на изгиб", value: "4 кН" },
      { label: "Испытательное напряжение грозового импульса", value: "120 кВ" },
      { label: "Масса", value: "2.8 кг" }
    ],
  },
]

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
