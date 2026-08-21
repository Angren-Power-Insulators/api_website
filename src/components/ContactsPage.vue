<template>
  <div>
    <!-- Header -->
    <section class="contacts-header">
      <v-container class="py-10 py-md-14 text-center">
        <h1 class="text-h4 text-md-h3 font-weight-bold text-white mb-3">{{ t('contacts.title') }}</h1>
        <p class="text-body-1 mx-auto mb-8" style="max-width: 560px; color: rgba(255,255,255,.82)">
          {{ t('contacts.formNote') }}
        </p>

        <div class="d-flex flex-wrap justify-center ga-3">
          <v-btn color="white" :href="`tel:${PHONE_TEL}`" prepend-icon="mdi-phone" size="large" variant="flat">
            <span class="text-primary">{{ t('contacts.callNow') }}</span>
          </v-btn>
          <v-btn
            color="success"
            :href="WHATSAPP_URL"
            prepend-icon="mdi-whatsapp"
            rel="noopener noreferrer"
            size="large"
            target="_blank"
            variant="flat"
          >
            {{ t('contacts.whatsapp') }}
          </v-btn>
          <v-btn
            class="contacts-outline-btn"
            :href="TELEGRAM_URL"
            prepend-icon="mdi-send"
            rel="noopener noreferrer"
            size="large"
            target="_blank"
            variant="outlined"
          >
            {{ t('contacts.telegram') }}
          </v-btn>
        </div>
      </v-container>
    </section>

    <v-container class="py-10 py-md-14" style="max-width: 1000px;">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="pa-4 h-100 d-flex align-start ga-3" rounded="xl" variant="outlined">
            <v-avatar color="primary" rounded="lg" variant="tonal">
              <v-icon>mdi-map-marker</v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-medium-emphasis">{{ t('contacts.addressLabel') }}</div>
              <div class="text-body-1 font-weight-medium">{{ t('contacts.address') }}</div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card class="pa-4 h-100 d-flex align-start ga-3" rounded="xl" variant="outlined">
            <v-avatar color="primary" rounded="lg" variant="tonal">
              <v-icon>mdi-phone</v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-medium-emphasis">{{ t('contacts.phoneLabel') }}</div>
              <a class="text-body-1 font-weight-medium text-high-emphasis text-decoration-none" :href="`tel:${PHONE_TEL}`">{{ PHONE_DISPLAY }}</a>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card class="pa-4 h-100 d-flex align-start ga-3" rounded="xl" variant="outlined">
            <v-avatar color="primary" rounded="lg" variant="tonal">
              <v-icon>mdi-email</v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-medium-emphasis">{{ t('contacts.emailLabel') }}</div>
              <a class="text-body-1 font-weight-medium text-high-emphasis text-decoration-none" :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card class="pa-4 h-100 d-flex align-start ga-3" rounded="xl" variant="outlined">
            <v-avatar color="primary" rounded="lg" variant="tonal">
              <v-icon>mdi-clock-outline</v-icon>
            </v-avatar>
            <div>
              <div class="text-caption text-medium-emphasis">{{ t('contacts.hoursLabel') }}</div>
              <div class="text-body-1 font-weight-medium">{{ t('contacts.hours') }}</div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Map -->
      <v-sheet class="mt-8 rounded-xl overflow-hidden" elevation="2">
        <iframe
          allowfullscreen
          height="360"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          :src="mapSrc"
          style="border:0; width: 100%; display: block;"
          :title="t('contacts.addressLabel')"
        />
      </v-sheet>
    </v-container>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/composables/usePageSeo'
import { PHONE_TEL, PHONE_DISPLAY, EMAIL, WHATSAPP_URL, TELEGRAM_URL } from '@/constants'

const { t } = useI18n()

const mapSrc = 'https://www.google.com/maps?q=' + encodeURIComponent('Angren, Tashkent region, Uzbekistan') + '&output=embed'

usePageSeo(() => ({
  title: t('contacts.title'),
  description: t('contacts.description'),
  path: '/contacts',
}))
</script>

<style scoped>
.contacts-header {
  background: linear-gradient(135deg, #0D2E7A 0%, #1D4ED8 100%);
}
.contacts-outline-btn {
  color: #fff !important;
  border-color: rgba(255, 255, 255, 0.6) !important;
}
</style>
