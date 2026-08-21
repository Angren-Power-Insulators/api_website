<template>
  <v-container class="py-8 py-md-12" style="max-width: 900px;">
    <h1 class="text-h4 text-md-h3 mb-6 text-center text-md-left">{{ t('about.title') }}</h1>

    <p class="text-body-1 mb-8">{{ t('about.intro') }}</p>

    <v-row class="mb-4">
      <v-col cols="12" md="6">
        <h2 class="text-h6 mb-2">{{ t('about.missionTitle') }}</h2>
        <p class="text-body-2">{{ t('about.mission') }}</p>
      </v-col>
      <v-col cols="12" md="6">
        <h2 class="text-h6 mb-2">{{ t('about.historyTitle') }}</h2>
        <p class="text-body-2">{{ t('about.history') }}</p>
      </v-col>
    </v-row>

    <h2 class="text-h6 mb-4 mt-4">{{ t('about.valuesTitle') }}</h2>
    <v-row>
      <v-col v-for="(value, i) in tm('about.values')" :key="i" cols="12" sm="6">
        <v-card class="pa-4 h-100" color="primary" variant="tonal">
          <v-icon class="mb-2" color="primary">mdi-check-circle</v-icon>
          <div class="text-body-2">{{ rt(value) }}</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useSeoMeta } from '@unhead/vue'

const { t, tm, rt } = useI18n()

useSeoMeta(() => ({
  title: t('about.title'),
  description: t('about.description'),
  ogTitle: t('about.title'),
  ogDescription: t('about.description'),
}))
</script>
