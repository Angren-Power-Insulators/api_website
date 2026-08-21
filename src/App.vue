<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { SITE_URL, PHONE_TEL, WHATSAPP_URL, TELEGRAM_URL, INSTAGRAM_URL, LOCATION_LAT, LOCATION_LNG } from '@/constants'

const logoUrl = new URL('@/assets/logo/logo_api_icon.png', import.meta.url).href

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Angren Power Insulators',
        url: SITE_URL,
        logo: logoUrl,
        image: logoUrl,
        telephone: PHONE_TEL,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Angren',
          addressRegion: 'Tashkent Region',
          addressCountry: 'UZ',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: LOCATION_LAT,
          longitude: LOCATION_LNG,
        },
        sameAs: [
          WHATSAPP_URL,
          TELEGRAM_URL,
          INSTAGRAM_URL,
        ],
      }),
    },
  ],
})
</script>
