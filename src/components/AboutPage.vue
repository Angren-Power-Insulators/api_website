<template>
  <div>
    <!-- Hero -->
    <section class="about-hero">
      <v-img alt="" class="about-hero-image" cover :src="heroImage" />
      <div class="about-hero-overlay" />
      <v-container class="about-hero-content d-flex align-center">
        <div>
          <h1 class="text-h4 text-md-h3 font-weight-bold text-white mb-3">{{ t('about.title') }}</h1>
          <p class="text-body-1 text-md-h6 font-weight-regular mx-auto" style="max-width: 640px; color: rgba(255,255,255,.85)">
            {{ t('about.intro') }}
          </p>
        </div>
      </v-container>
    </section>

    <v-container class="py-10 py-md-14" style="max-width: 1000px;">
      <v-row class="mb-4">
        <v-col cols="12" md="6">
          <v-card class="pa-6 h-100" rounded="xl" variant="outlined">
            <v-icon class="mb-3" color="primary" size="32">mdi-flag-outline</v-icon>
            <h2 class="text-h6 mb-2">{{ t('about.missionTitle') }}</h2>
            <p class="text-body-2 text-medium-emphasis">{{ t('about.mission') }}</p>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-6 h-100" rounded="xl" variant="outlined">
            <v-icon class="mb-3" color="primary" size="32">mdi-book-open-page-variant-outline</v-icon>
            <h2 class="text-h6 mb-2">{{ t('about.historyTitle') }}</h2>
            <p class="text-body-2 text-medium-emphasis">{{ t('about.history') }}</p>
          </v-card>
        </v-col>
      </v-row>

      <h2 class="text-h6 mb-4 mt-8">{{ t('about.valuesTitle') }}</h2>
      <v-row>
        <v-col v-for="(value, i) in tm('about.values')" :key="i" cols="12" sm="6">
          <v-card class="pa-4 h-100 d-flex align-center ga-3" color="primary" rounded="lg" variant="tonal">
            <v-icon color="primary">mdi-check-circle</v-icon>
            <div class="text-body-2">{{ rt(value) }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Gallery -->
    <section class="section-py" style="background: #F5F7FA">
      <v-container>
        <h2 class="text-h6 text-md-h5 font-weight-bold text-center mb-8">{{ t('about.galleryTitle') }}</h2>
        <v-row dense>
          <v-col v-for="img in gallery" :key="img.src" cols="6" md="3">
            <v-img :alt="img.alt" class="rounded-lg hover-lift" cover height="160" :src="img.src" />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/composables/usePageSeo'

const { t, tm, rt } = useI18n()

usePageSeo(() => ({
  title: t('about.title'),
  description: t('about.description'),
  path: '/about',
}))

const heroImage = new URL('@/assets/factory/kiln_1.jpg', import.meta.url).href

const gallery = [
  { src: new URL('@/assets/factory/multi_ipu.jpg', import.meta.url).href, alt: 'Production line' },
  { src: new URL('@/assets/factory/ball_mills.jpg', import.meta.url).href, alt: 'Ball mills' },
  { src: new URL('@/assets/factory/io_triple.jpg', import.meta.url).href, alt: 'Support insulators' },
  { src: new URL('@/assets/factory/kiln_2.jpg', import.meta.url).href, alt: 'Kiln' },
]
</script>

<style scoped>
.about-hero {
  position: relative;
  height: 320px;
  overflow: hidden;
}
.about-hero-image {
  position: absolute;
  inset: 0;
}
.about-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(8, 20, 56, 0.88) 0%, rgba(8, 20, 56, 0.6) 100%);
}
.about-hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
}
</style>
