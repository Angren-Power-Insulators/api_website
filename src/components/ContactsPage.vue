<template>
  <v-container class="py-8 py-md-12" style="max-width: 900px;">
    <h1 class="text-h4 text-md-h3 mb-6 text-center text-md-left">{{ t('contacts.title') }}</h1>

    <p class="text-body-1 mb-8">{{ t('contacts.formNote') }}</p>

    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="pa-4 h-100" variant="outlined">
          <v-icon class="mb-2" color="primary">mdi-map-marker</v-icon>
          <div class="text-caption text-medium-emphasis">{{ t('contacts.addressLabel') }}</div>
          <div class="text-body-1">{{ t('contacts.address') }}</div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card class="pa-4 h-100" variant="outlined">
          <v-icon class="mb-2" color="primary">mdi-phone</v-icon>
          <div class="text-caption text-medium-emphasis">{{ t('contacts.phoneLabel') }}</div>
          <a class="text-body-1 text-high-emphasis text-decoration-none" href="tel:+998994431177">(998) 99-443-1177</a>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card class="pa-4 h-100" variant="outlined">
          <v-icon class="mb-2" color="primary">mdi-email</v-icon>
          <div class="text-caption text-medium-emphasis">{{ t('contacts.emailLabel') }}</div>
          <a class="text-body-1 text-high-emphasis text-decoration-none" :href="`mailto:${email}`">{{ email }}</a>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card class="pa-4 h-100" variant="outlined">
          <v-icon class="mb-2" color="primary">mdi-clock-outline</v-icon>
          <div class="text-caption text-medium-emphasis">{{ t('contacts.hoursLabel') }}</div>
          <div class="text-body-1">{{ t('contacts.hours') }}</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/composables/usePageSeo'

const { t } = useI18n()

const email = 'info@apinsulators.co'

usePageSeo(() => ({
  title: t('contacts.title'),
  description: t('contacts.description'),
  path: '/contacts',
}))
</script>
