<template>
  <!-- Top Bar -->
  <v-app-bar
    :class="{ 'glass-nav': scrolled }"
    :color="scrolled ? undefined : 'white'"
    :elevation="scrolled ? 3 : 0"
    height="72"
  >
    <v-container class="d-flex align-center px-4" fluid>
      <!-- Logo -->
      <v-img
        alt="Angren Power Insulators"
        class="cursor-pointer flex-0-1-auto"
        max-width="220"
        height="36"
        src="@/assets/logo/logo_api.png"
        @click="goHome"
      />

      <v-spacer />

      <!-- Desktop Menu -->
      <div class="d-none d-md-flex align-center mr-2">
        <v-btn
          v-for="item in navItems"
          :key="item.to"
          class="nav-link mx-1"
          exact
          :to="item.to"
          variant="text"
        >
          {{ item.label }}
        </v-btn>
      </div>

      <LanguageSwitcher class="mr-2" />

      <!-- Desktop CTA -->
      <v-btn
        class="d-none d-md-flex"
        color="primary"
        :href="`tel:${PHONE_TEL}`"
        prepend-icon="mdi-phone"
        variant="flat"
      >
        {{ t('nav.contactCta') }}
      </v-btn>

      <!-- Mobile Hamburger -->
      <v-btn class="d-md-none" icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>

  <!-- Mobile Drawer -->
  <v-navigation-drawer v-model="drawer" location="right" temporary width="300">
    <div class="d-flex align-center justify-space-between pa-4">
      <v-img
        alt="Angren Power Insulators"
        max-width="150"
        src="@/assets/logo/logo_api.png"
      />
      <v-btn icon size="small" variant="text" @click="drawer = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <v-divider />

    <v-list class="py-2" nav>
      <v-list-item
        v-for="item in navItems"
        :key="item.to"
        exact
        :prepend-icon="item.icon"
        rounded="lg"
        :title="item.label"
        :to="item.to"
        @click="drawer = false"
      />
    </v-list>

    <v-divider class="my-2" />

    <div class="px-4 py-2">
      <div class="text-caption text-medium-emphasis mb-2 text-uppercase">
        {{ t('contacts.title') }}
      </div>

      <a class="d-flex align-center text-body-2 text-high-emphasis text-decoration-none mb-3" :href="`tel:${PHONE_TEL}`">
        <v-icon class="mr-2" color="primary" size="20">mdi-phone</v-icon>
        {{ PHONE_DISPLAY }}
      </a>

      <div class="d-flex ga-2">
        <v-btn color="success" icon="mdi-whatsapp" :href="WHATSAPP_URL" rel="noopener noreferrer" size="small" target="_blank" variant="tonal" />
        <v-btn color="info" icon="mdi-send" :href="TELEGRAM_URL" rel="noopener noreferrer" size="small" target="_blank" variant="tonal" />
        <v-btn color="primary" icon="mdi-instagram" :href="INSTAGRAM_URL" rel="noopener noreferrer" size="small" target="_blank" variant="tonal" />
      </div>
    </div>

    <template #append>
      <v-btn
        block
        class="ma-4"
        color="primary"
        :href="`tel:${PHONE_TEL}`"
        prepend-icon="mdi-phone"
        rounded="lg"
        size="large"
        variant="flat"
        style="width: calc(100% - 32px);"
      >
        {{ t('nav.contactCta') }}
      </v-btn>
    </template>
  </v-navigation-drawer>

  <!-- Main page content -->
  <router-view />

  <!-- Mobile quick-action bar -->
  <div class="quickbar d-flex d-md-none">
    <router-link class="quickbar-item" to="/" exact-active-class="quickbar-item--active">
      <v-icon size="22">mdi-home-outline</v-icon>
      <span>{{ t('quickbar.home') }}</span>
    </router-link>
    <router-link class="quickbar-item" to="/catalogue" active-class="quickbar-item--active">
      <v-icon size="22">mdi-view-grid-outline</v-icon>
      <span>{{ t('quickbar.catalogue') }}</span>
    </router-link>
    <a class="quickbar-item quickbar-item--accent" :href="`tel:${PHONE_TEL}`">
      <v-icon size="24">mdi-phone</v-icon>
      <span>{{ t('quickbar.call') }}</span>
    </a>
    <a class="quickbar-item" :href="WHATSAPP_URL" rel="noopener noreferrer" target="_blank">
      <v-icon size="22">mdi-whatsapp</v-icon>
      <span>{{ t('quickbar.whatsapp') }}</span>
    </a>
    <router-link class="quickbar-item" to="/contacts" active-class="quickbar-item--active">
      <v-icon size="22">mdi-card-account-phone-outline</v-icon>
      <span>{{ t('quickbar.contacts') }}</span>
    </router-link>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL, TELEGRAM_URL, INSTAGRAM_URL } from '@/constants'

const router = useRouter()
const { t } = useI18n()

const goHome = () => {
  router.push('/')
}

const drawer = ref(false)

const navItems = computed(() => [
  { to: '/', label: t('nav.home'), icon: 'mdi-home-outline' },
  { to: '/catalogue', label: t('nav.catalogue'), icon: 'mdi-view-grid-outline' },
  { to: '/about', label: t('nav.about'), icon: 'mdi-information-outline' },
  { to: '/contacts', label: t('nav.contacts'), icon: 'mdi-card-account-phone-outline' },
])

// Elevate / blur the app-bar once the page has scrolled a little.
const scrolled = ref(false)
function onScroll () {
  scrolled.value = window.scrollY > 12
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav-link {
  font-weight: 500;
  opacity: 0.8;
}
.nav-link:deep(.router-link-active),
.nav-link.v-btn--active {
  opacity: 1;
}

.quickbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-top: 1px solid rgba(13, 46, 122, 0.08);
  box-shadow: 0 -8px 24px -12px rgba(13, 46, 122, 0.25);
  padding-bottom: env(safe-area-inset-bottom, 0);
}

.quickbar-item {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 8px 2px 6px;
  color: rgba(13, 46, 122, 0.55);
  text-decoration: none;
  font-size: 11px;
  line-height: 1.1;
}

.quickbar-item span {
  white-space: nowrap;
}

.quickbar-item--active {
  color: #0D2E7A;
  font-weight: 600;
}

.quickbar-item--accent {
  color: #fff;
  background: linear-gradient(135deg, #0D2E7A, #3B82F6);
  margin: 6px 4px;
  border-radius: 14px;
  padding-top: 6px;
  padding-bottom: 4px;
}
</style>
