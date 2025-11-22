<template>
  <v-app>

    <!-- Top Bar -->
    <v-app-bar flat color="white">
      <!-- Logo -->
      <v-img
        height="40"
        src="@/assets/logo/logo_api.png"
      />

      <v-spacer></v-spacer>

      <!-- Desktop Menu -->
      <div class="d-none d-md-flex">
        <v-btn text to="/" exact>ГЛАВНАЯ</v-btn>
        <v-btn text to="/catalogue">КАТАЛОГ</v-btn>
        <v-btn text to="/contacts">КОНТАКТЫ</v-btn>
      </div>

      <!-- Mobile Hamburger -->
      <v-btn
        icon
        class="d-md-none"
        @click="drawer = true"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
    >
      <v-list>
        <v-list-item to="/" exact title="ГЛАВНАЯ" @click="drawer = false" />
        <v-list-item to="/catalogue" title="КАТАЛОГ" @click="drawer = false" />
        <v-list-item to="/contacts" title="КОНТАКТЫ" @click="drawer = false" />
      </v-list>
    </v-navigation-drawer>

    <!-- Main page content -->
    <router-view />
  </v-app>
</template>

<script setup>
import { ref } from "vue"

const drawer = ref(false)
</script>
