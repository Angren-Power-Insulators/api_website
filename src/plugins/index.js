/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import VueGtag from 'vue-gtag'
import { i18n } from '@/i18n'
import { createHead } from '@unhead/vue/client'

const head = createHead()



export function registerPlugins(app) {
  app
    .use(vuetify)
    .use(router)
    .use(i18n)
    .use(head)
    .use(pinia)
    .use(VueGtag, {
      config: { id: import.meta.env.VITE_GA_MEASUREMENT_ID },
    })
}
