<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { SITE_URL } from '@/constants'

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
        telephone: '+998994431177',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Angren',
          addressRegion: 'Tashkent Region',
          addressCountry: 'UZ',
        },
        sameAs: [
          'https://wa.me/998998426389',
          'https://telegram.me/notarious2',
          'https://www.instagram.com/ap.insulators/',
        ],
      }),
    },
  ],
})
</script>
