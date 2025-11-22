<template>
  <v-footer height="50" color="white" app>

    <!-- Social icons -->
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon>
        <v-img :src="item.src" height="30" />
      </v-icon>
    </a>

    <!-- Phone number -->
    <div class="ml-2 text-blue-darken-4 font-weight-semibold" style="user-select: none">
      <v-icon icon="mdi-phone" color="info"></v-icon>
      (998)99-443-1177
    </div>

    <!-- Logo + Company name + Year (disappear on mobile) -->
    <div
      class="text-caption text-disabled d-none d-sm-flex align-center"
      style="position: absolute; right: 16px"
    >
      <v-img
        src="@/assets/logo/logo_api_icon.png"
        height="20"
        width="20"
        class="mr-2"
      />

      <span
        class="d-none d-sm-inline-block mr-1 text-blue-darken-4 font-weight-bold"
        style="user-select: none"
      >
        Angren Power Insulators
      </span>

      <span class="text-blue-darken-4">
        &copy; {{ new Date().getFullYear() }}
      </span>
    </div>

  </v-footer>
</template>


<script setup>
const items = [
  {
    title: 'Whatsapp',
    src: new URL('@/assets/logo/whatsapp.webp', import.meta.url).href,
    href: 'https://wa.me/998998426389',
  },
  {
    title: 'Telegram',
    src: new URL('@/assets/logo/telegram.png', import.meta.url).href,
    href: 'https://telegram.me/notarious2',

  },
  {
    title: 'Instagram',
    src: new URL('@/assets/logo/instagram.webp', import.meta.url).href,
    href: 'https://www.instagram.com/ap.insulators/',

  }
]
</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>
