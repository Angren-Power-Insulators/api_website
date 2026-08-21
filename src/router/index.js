/**
 * router/index.ts
 *
 * Manually defined routes. Every page lives under an optional "/en" or "/uz"
 * locale prefix — the default locale (ru) is served unprefixed at "/" so the
 * existing indexed URLs keep working. See src/i18n.js and
 * src/utils/localePath.js for the other half of this.
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { setLocale } from '@/i18n'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/constants'
// import { routes } from 'vue-router/auto-routes'

const routes = [
  {
    path: '/:locale(en|uz)?',
    component: () => import('@/components/TopNavigation.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/components/HomePage.vue'),
      },
      {
        path: 'catalogue',
        name: 'Catalogue',
        component: () => import('@/components/ProductCatalogue.vue'),
      },
      {
        path: 'catalogue/:id',
        name: 'product',
        component: () => import('@/components/ProductDetails.vue'),
        props: true,
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/components/AboutPage.vue'),
      },
      {
        path: 'contacts',
        name: 'Contacts',
        component: () => import('@/components/ContactsPage.vue'),
      },
      {
        path: ':pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/components/NotFound.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

// The URL's :locale param is the single source of truth for the active
// language — this keeps vue-i18n (and <html lang>) in sync with it on every
// navigation, including the very first one.
router.beforeEach(to => {
  const locale = SUPPORTED_LOCALES.includes(to.params.locale) ? to.params.locale : DEFAULT_LOCALE
  setLocale(locale)
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
