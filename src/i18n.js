import { createI18n } from 'vue-i18n'

const messages = {
  en: { hello: "Hello world!" },
  ru: { hello: "Привет мир!" },
  uz: { hello: "Salom dunyo!" }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages
})
