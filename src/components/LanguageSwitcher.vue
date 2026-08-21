<template>
  <v-select
    :model-value="currentLocale"
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
    @update:model-value="onLocaleChange"
  >
    <template v-slot:prepend-inner>
      <country-flag :country="flagCountry" rounded size="normal" style="margin: -10px" />
    </template>
  </v-select>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CountryFlag from 'vue-country-flag-next'
import { DEFAULT_LOCALE } from '@/constants'
import { localizedPath, neutralizePath } from '@/utils/localePath'

const route = useRoute()
const router = useRouter()

const currentLocale = computed(() => route.params.locale || DEFAULT_LOCALE)

const FLAG_BY_LOCALE = { ru: 'ru', uz: 'uz', en: 'us' }
const flagCountry = computed(() => FLAG_BY_LOCALE[currentLocale.value] || 'us')

// Re-navigate to the same page under the new locale prefix (the router's
// beforeEach guard applies the locale itself once this lands). Built as a
// plain path string rather than named-route params: passing `undefined` for
// an optional route param doesn't reliably drop it from the resolved URL.
function onLocaleChange (newLocale) {
  router.push(localizedPath(neutralizePath(route.path), newLocale))
}
</script>

<style>
.v-field__outline {
  --v-field-border-width: 0px !important;
  --v-field-border-opacity: 1 !important;
}
</style>
