<template>
  <div class="bg-grey-darken-4">

    <v-carousel
    height="500"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
    >

    </v-carousel-item>
  </v-carousel>

  <ProductCatalogueDialog/>
  </div>

</template>

<script setup>
  const slides = [
    {
      src: new URL("@/assets/factory/multi_ipu.jpg", import.meta.url).href,
    },
    {
      src: new URL("@/assets/factory/ball_mills.jpg", import.meta.url).href,
    },
    {
      src: new URL("@/assets/factory/io_triple.jpg", import.meta.url).href,
    },
    {
      src: new URL("@/assets/factory/kiln_1.jpg", import.meta.url).href,
    },
        {
      src: new URL("@/assets/factory/kiln_2.jpg", import.meta.url).href,
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
