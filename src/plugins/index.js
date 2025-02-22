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

export function registerPlugins(app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueGtag, {
      config: { id: import.meta.env.VITE_GA_MEASUREMENT_ID },
    })
}
