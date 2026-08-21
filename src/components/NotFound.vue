<template>
  <v-container class="py-16 text-center">
    <div class="text-h2 font-weight-bold text-primary mb-4">404</div>
    <h1 class="text-h5 mb-4">{{ t('notFound.title') }}</h1>
    <p class="text-body-1 text-medium-emphasis mb-8">{{ t('notFound.message') }}</p>
    <v-btn color="primary" to="/" variant="tonal">{{ t('notFound.backHome') }}</v-btn>
  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useSeoMeta } from '@unhead/vue'

const { t } = useI18n()

useSeoMeta({
  title: () => t('notFound.title'),
  description: () => t('notFound.message'),
  robots: 'noindex, follow',
})
</script>
