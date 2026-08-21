<template>
  <!-- Top Bar -->
  <v-app-bar flat color="white">
    <!-- Logo -->
    <v-img alt="Angren Power Insulators" class="cursor-pointer" height="40" src="@/assets/logo/logo_api.png" @click="goHome" />

    <v-spacer></v-spacer>

    <LanguageSwitcher />

    <!-- Desktop Menu -->
    <div class="d-none d-md-flex">
      <v-btn exact text to="/">{{ t('nav.home') }}</v-btn>
      <v-btn text to="/catalogue">{{ t('nav.catalogue') }}</v-btn>
      <v-btn text to="/about">{{ t('nav.about') }}</v-btn>
      <v-btn text to="/contacts">{{ t('nav.contacts') }}</v-btn>
    </div>

    <!-- Mobile Hamburger -->
    <v-btn class="d-md-none" icon @click="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

  </v-app-bar>

  <!-- Mobile Drawer -->
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list>
      <v-list-item exact :title="t('nav.home')" to="/" @click="drawer = false" />
      <v-list-item :title="t('nav.catalogue')" to="/catalogue" @click="drawer = false" />
      <v-list-item :title="t('nav.about')" to="/about" @click="drawer = false" />
      <v-list-item :title="t('nav.contacts')" to="/contacts" @click="drawer = false" />
    </v-list>


    <v-btn icon @click="drawer = false">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-navigation-drawer>

  <!-- Main page content -->
  <router-view />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const goHome = () => {
  router.push('/')
}

const drawer = ref(false)
</script>
