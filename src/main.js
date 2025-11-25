/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import CountryFlag from 'vue-country-flag-next'


const app = createApp(App)

registerPlugins(app)

app.component('country-flag', CountryFlag)

app.mount('#app')
