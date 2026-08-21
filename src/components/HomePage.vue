<template>
  <div class="bg-grey-darken-4">

    <v-carousel
      cycle
      :height="mobile ? 240 : 500"
      hide-delimiter-background
      show-arrows="hover"
    >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :alt="slide.alt"
      :src="slide.src"
    >

    </v-carousel-item>
  </v-carousel>

  <ProductCatalogueDialog/>
  </div>

</template>

<script setup>
  import { useDisplay } from 'vuetify'
  import { useI18n } from 'vue-i18n'
  import { useSeoMeta } from '@unhead/vue'

  const { mobile } = useDisplay()
  const { t } = useI18n()

  useSeoMeta(() => ({
    title: t('home.title'),
    description: t('home.description'),
    ogTitle: t('home.title'),
    ogDescription: t('home.description'),
  }))

  const slides = [
    {
      src: new URL("@/assets/factory/multi_ipu.jpg", import.meta.url).href,
      alt: "Angren Power Insulators production line",
    },
    {
      src: new URL("@/assets/factory/ball_mills.jpg", import.meta.url).href,
      alt: "Ball mills used in porcelain insulator production",
    },
    {
      src: new URL("@/assets/factory/io_triple.jpg", import.meta.url).href,
      alt: "Support insulators at the factory",
    },
    {
      src: new URL("@/assets/factory/kiln_1.jpg", import.meta.url).href,
      alt: "Kiln used to fire porcelain insulators",
    },
        {
      src: new URL("@/assets/factory/kiln_2.jpg", import.meta.url).href,
      alt: "Kiln used to fire porcelain insulators",
    },
  ]
</script>

<style>
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* ensures image fills the slide */
}
</style>
