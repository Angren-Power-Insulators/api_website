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

      <v-row class="mt-2">
        <!-- Quote request form -->
        <v-col cols="12" md="6">
          <v-card class="pa-6 h-100" rounded="xl" variant="outlined">
            <h2 class="text-h6 font-weight-bold mb-1">{{ t('contacts.form.title') }}</h2>
            <p class="text-body-2 text-medium-emphasis mb-6">{{ t('contacts.form.subtitle') }}</p>

            <v-form ref="formRef" @submit.prevent="submitViaWhatsapp">
              <v-text-field
                v-model="form.name"
                class="mb-1"
                :label="t('contacts.form.name')"
                :rules="[v => !!v?.trim() || t('contacts.form.nameRequired')]"
              />
              <v-text-field
                v-model="form.phone"
                class="mb-1"
                :label="t('contacts.form.phone')"
                :rules="[v => !!v?.trim() || t('contacts.form.phoneRequired')]"
                type="tel"
              />
              <v-select
                v-model="form.product"
                class="mb-1"
                :items="productOptions"
                item-title="label"
                item-value="value"
                :label="t('contacts.form.product')"
              />
              <v-textarea
                v-model="form.message"
                :label="t('contacts.form.message')"
                rows="3"
              />

              <v-btn
                block
                color="success"
                prepend-icon="mdi-whatsapp"
                size="large"
                type="submit"
                variant="flat"
              >
                {{ t('contacts.form.submit') }}
              </v-btn>

              <p class="text-caption text-medium-emphasis text-center mt-4 mb-0">
                {{ t('contacts.form.emailAlt') }}
                <a class="text-primary text-decoration-none font-weight-medium" :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
              </p>
            </v-form>
          </v-card>
        </v-col>

        <!-- Map -->
        <v-col cols="12" md="6">
          <v-sheet class="rounded-xl overflow-hidden h-100" elevation="2">
            <iframe
              allowfullscreen
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              :src="mapSrc"
              style="border:0; width: 100%; display: block; min-height: 360px;"
              :title="t('contacts.addressLabel')"
            />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/composables/usePageSeo'
import { useLocalizedProducts } from '@/composables/useLocalizedProducts'
import { PHONE_TEL, PHONE_DISPLAY, EMAIL, WHATSAPP_URL, TELEGRAM_URL, LOCATION_LAT, LOCATION_LNG } from '@/constants'

const { t } = useI18n()
const { localizedProducts } = useLocalizedProducts()

const mapSrc = `https://www.google.com/maps?q=${LOCATION_LAT},${LOCATION_LNG}&z=17&output=embed`

usePageSeo(() => ({
  title: t('contacts.title'),
  description: t('contacts.description'),
  path: '/contacts',
}))

const formRef = ref(null)
const form = reactive({ name: '', phone: '', product: '', message: '' })

const productOptions = computed(() => [
  { value: '', label: t('contacts.form.productAny') },
  ...localizedProducts.value.map(p => ({ value: p.name, label: p.name })),
])

async function submitViaWhatsapp () {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  const lines = [
    t('contacts.form.whatsappIntro'),
    `${t('contacts.form.name')}: ${form.name}`,
    `${t('contacts.form.phone')}: ${form.phone}`,
  ]
  if (form.product) lines.push(`${t('contacts.form.product')}: ${form.product}`)
  if (form.message?.trim()) lines.push(`${t('contacts.form.message')}: ${form.message.trim()}`)

  const url = `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join('\n'))}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
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
