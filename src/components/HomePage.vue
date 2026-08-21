<template>
  <div>
    <!-- ================= HERO ================= -->
    <section class="hero" :style="{ height: mobile ? '480px' : '620px' }">
      <v-carousel
        class="hero-carousel"
        cycle
        :height="mobile ? 480 : 620"
        hide-delimiter-background
        :show-arrows="false"
        hide-delimiters
        interval="6000"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          :alt="slide.alt"
          cover
          :src="slide.src"
        />
      </v-carousel>

      <div class="hero-overlay" />

      <v-container class="hero-content fill-height">
        <v-row align="center" class="fill-height">
          <v-col cols="12" md="8" lg="7">
            <div class="text-overline text-white mb-2 hero-eyebrow">Angren Power Insulators</div>
            <h1 class="text-h4 text-md-h2 font-weight-bold text-white mb-4 hero-title">
              {{ t('home.hero.title') }}
            </h1>
            <p class="text-body-1 text-md-h6 font-weight-regular hero-subtitle mb-8">
              {{ t('home.hero.subtitle') }}
            </p>

            <div class="d-flex flex-column flex-sm-row ga-3">
              <v-btn color="primary" size="x-large" to="/catalogue" variant="flat">
                {{ t('home.hero.ctaPrimary') }}
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
              <v-btn class="hero-btn-outline" size="x-large" to="/contacts" variant="outlined">
                {{ t('home.hero.ctaSecondary') }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ================= STATS ================= -->
    <v-container class="stats-container">
      <v-sheet class="stats-sheet pa-6 pa-md-8" color="white" elevation="8" rounded="xl">
        <v-row no-gutters>
          <v-col
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="stat-col"
            :class="{ 'stat-col--divider': i > 0 }"
            cols="6"
            md="3"
          >
            <div class="text-h5 text-md-h4 font-weight-bold text-primary">{{ stat.value }}</div>
            <div class="text-caption text-md-body-2 text-medium-emphasis">{{ stat.label }}</div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>

    <!-- ================= FEATURED PRODUCTS ================= -->
    <v-container class="section-py" tag="section">
      <div class="text-center mb-10">
        <h2 class="text-h5 text-md-h4 font-weight-bold mb-3">{{ t('home.featured.title') }}</h2>
        <p class="text-body-1 text-medium-emphasis mx-auto" style="max-width: 640px">
          {{ t('home.featured.subtitle') }}
        </p>
      </div>

      <v-row dense>
        <v-col v-for="product in featuredProducts" :key="product.id" cols="12" lg="3" md="4" sm="6">
          <v-card class="product-card hover-lift h-100 d-flex flex-column" :to="`/catalogue/${product.id}`" variant="outlined">
            <div class="product-card-image">
              <v-img :alt="product.name" height="180" :src="product.image" />
            </div>
            <v-card-title class="text-body-1">{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.short }}</v-card-subtitle>
            <v-spacer />
            <v-card-text class="d-flex align-center justify-space-between">
              <strong class="text-primary">{{ product.price }} {{ t('common.currency') }}</strong>
              <v-icon color="primary">mdi-arrow-right</v-icon>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="text-center mt-8">
        <v-btn color="primary" size="large" to="/catalogue" variant="tonal">
          {{ t('home.featured.viewAll') }}
        </v-btn>
      </div>
    </v-container>

    <!-- ================= WHY CHOOSE US ================= -->
    <section class="why-us-section section-py">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="5">
            <v-img
              alt="Angren Power Insulators factory"
              class="rounded-xl"
              cover
              height="380"
              :src="factoryImage"
            />
          </v-col>

          <v-col cols="12" md="7">
            <h2 class="text-h5 text-md-h4 font-weight-bold mb-6">{{ t('about.valuesTitle') }}</h2>

            <v-row dense>
              <v-col v-for="(value, i) in tm('about.values')" :key="i" cols="12" sm="6">
                <div class="d-flex align-start ga-3 mb-4">
                  <v-avatar color="primary" size="36" variant="tonal">
                    <v-icon size="20">mdi-check-bold</v-icon>
                  </v-avatar>
                  <span class="text-body-2 pt-1">{{ rt(value) }}</span>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ================= CTA BANNER ================= -->
    <section class="cta-banner">
      <v-container class="py-12 text-center">
        <h2 class="text-h5 text-md-h4 font-weight-bold text-white mb-3">{{ t('home.cta.title') }}</h2>
        <p class="text-body-1 mx-auto mb-8" style="max-width: 560px; color: rgba(255,255,255,.8)">
          {{ t('home.cta.subtitle') }}
        </p>
        <div class="d-flex flex-column flex-sm-row justify-center ga-3">
          <v-btn color="white" :href="`tel:${PHONE_TEL}`" prepend-icon="mdi-phone" size="x-large" variant="flat">
            <span class="text-primary">{{ t('home.cta.call') }}</span>
          </v-btn>
          <v-btn
            class="hero-btn-outline"
            :href="WHATSAPP_URL"
            prepend-icon="mdi-whatsapp"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="outlined"
          >
            {{ t('home.cta.whatsapp') }}
          </v-btn>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/composables/usePageSeo'
import { useLocalizedProducts } from '@/composables/useLocalizedProducts'
import { PHONE_TEL, WHATSAPP_URL } from '@/constants'

const { mobile } = useDisplay()
const { t, tm, rt } = useI18n()
const { localizedProducts } = useLocalizedProducts()

usePageSeo(() => ({
  title: t('home.title'),
  description: t('home.description'),
  path: '/',
}))

const factoryImage = new URL('@/assets/factory/ball_mills.jpg', import.meta.url).href

const slides = [
  {
    src: new URL('@/assets/factory/multi_ipu.jpg', import.meta.url).href,
    alt: 'Angren Power Insulators production line',
  },
  {
    src: new URL('@/assets/factory/ball_mills.jpg', import.meta.url).href,
    alt: 'Ball mills used in porcelain insulator production',
  },
  {
    src: new URL('@/assets/factory/io_triple.jpg', import.meta.url).href,
    alt: 'Support insulators at the factory',
  },
  {
    src: new URL('@/assets/factory/kiln_1.jpg', import.meta.url).href,
    alt: 'Kiln used to fire porcelain insulators',
  },
  {
    src: new URL('@/assets/factory/kiln_2.jpg', import.meta.url).href,
    alt: 'Kiln used to fire porcelain insulators',
  },
]

const featuredProducts = computed(() => localizedProducts.value.slice(0, 4))

const stats = computed(() => [
  { value: t('home.stats.experienceValue'), label: t('home.stats.experienceLabel') },
  { value: String(localizedProducts.value.length) + '+', label: t('home.stats.productsLabel') },
  { value: t('home.stats.regionsValue'), label: t('home.stats.regionsLabel') },
  { value: t('home.stats.qualityValue'), label: t('home.stats.qualityLabel') },
])
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}
.hero-carousel {
  position: absolute;
  inset: 0;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(8, 20, 56, 0.88) 0%, rgba(8, 20, 56, 0.55) 55%, rgba(8, 20, 56, 0.25) 100%);
  pointer-events: none;
}
.hero-content {
  position: relative;
  z-index: 2;
}
.hero-eyebrow {
  letter-spacing: 0.16em;
  opacity: 0.85;
}
.hero-title {
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
}
.hero-subtitle {
  color: rgba(255, 255, 255, 0.85);
  max-width: 560px;
}
.hero-btn-outline {
  color: #fff !important;
  border-color: rgba(255, 255, 255, 0.6) !important;
}

.stats-container {
  margin-top: -56px;
  position: relative;
  z-index: 3;
}
.stat-col {
  text-align: center;
  padding: 8px 4px;
}
.stat-col--divider {
  border-left: 1px solid rgba(13, 46, 122, 0.1);
}
@media (max-width: 600px) {
  .stat-col--divider:nth-child(odd) {
    border-left: none;
  }
}

.product-card-image {
  background: linear-gradient(180deg, #F5F7FA 0%, #ECEFF3 100%);
  padding: 8px;
}

.why-us-section {
  background: #F5F7FA;
}

.cta-banner {
  background: linear-gradient(135deg, #0D2E7A 0%, #1D4ED8 100%);
}
</style>
