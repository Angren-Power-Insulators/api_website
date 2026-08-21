<template>
  <v-select
    v-model="locale"
    bg-color="transparent"
    class="mb-4"
    hide-details
    :items="[
      { title: 'РУ', value: 'ru' },
      { title: 'ЎЗ', value: 'uz' },
      { title: 'EN', value: 'en' }
    ]"
    menu-icon=""
    style="max-width: 120px"
    variant="plain"
  >
    <template v-slot:prepend-inner>
      <country-flag :country="flagCountry" rounded size="normal" style="margin: -10px" />
    </template>
  </v-select>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import CountryFlag from 'vue-country-flag-next'

const { locale } = useI18n()

const FLAG_BY_LOCALE = { ru: 'ru', uz: 'uz', en: 'us' }
const flagCountry = computed(() => FLAG_BY_LOCALE[locale.value] || 'us')

watch(locale, value => {
  localStorage.setItem('locale', value)
  document.documentElement.setAttribute('lang', value)
})
</script>

<style>
.v-field__outline {
  --v-field-border-width: 0px !important;
  --v-field-border-opacity: 1 !important;
}
</style>
