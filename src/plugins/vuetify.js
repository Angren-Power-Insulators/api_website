/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#0D2E7A',
          'primary-darken-1': '#081D50',
          secondary: '#1976D2',
          accent: '#3B82F6',
          info: '#1976D2',
          success: '#1E8E5A',
          warning: '#C77700',
          error: '#C62828',
          background: '#F5F7FA',
          surface: '#FFFFFF',
          'surface-variant': '#8A8F98',
          'on-surface-variant': '#4A4F58',
        },
        variables: {
          'border-color': '#1F2937',
          'border-opacity': 0.08,
        },
      },
    },
  },
  defaults: {
    VBtn: {
      rounded: 'lg',
      style: 'letter-spacing: normal;',
    },
    VCard: {
      rounded: 'xl',
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
      rounded: 'lg',
    },
    VSelect: {
      variant: 'outlined',
      density: 'comfortable',
    },
    VChip: {
      rounded: 'lg',
    },
  },
})
