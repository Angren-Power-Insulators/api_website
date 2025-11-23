<template>
  <v-select
    class="mb-4"
    style="max-width: 120px"
    bg-color="transparent"
    menu-icon=""
    v-model="selectedCountry"
    variant="plain"
    hide-details
    :items="[
      { title: 'РУ', value: 'ru' },
      { title: 'ЎЗ', value: 'uz' },
      { title: 'EN', value: 'us' }
    ]"
  >
    <template v-slot:prepend-inner>
      <country-flag style="margin: -10px" rounded :country="selectedCountry" size="normal" />
    </template>
  </v-select>
</template>

<script setup>
import { ref } from 'vue'

import CountryFlag from 'vue-country-flag-next'

const selectedCountry = ref('RU') // default RU
</script>

<style>
/* .v-field--focused {
  outline-color: transparent !important;
  outline-style: solid !important;
}

.v-field__outline {
  outline-color: transparent !important;
  outline-style: solid !important;
}

.v-field--variant-outlined .v-field__outline__start,
.v-field--variant-outlined .v-field__outline__notch::before,
.v-field--variant-outlined .v-field__outline__notch::after,
.v-field--variant-outlined .v-field__outline__end {
  outline-color: transparent !important;
  outline-style: solid !important;
} */

.v-field__outline {
  --v-field-border-width: 0px !important;
  --v-field-border-opacity: 1 !important;
}
</style>
