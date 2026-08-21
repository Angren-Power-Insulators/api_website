import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'
import uz from '@/locales/uz.json'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/constants'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { en, ru, uz },
})

// The URL is the single source of truth for locale (see the router's
// beforeEach guard) — this just applies it to vue-i18n and <html lang>.
export function setLocale (locale) {
  if (!SUPPORTED_LOCALES.includes(locale)) return
  if (i18n.global.locale.value === locale) return
  i18n.global.locale.value = locale
  document.documentElement.setAttribute('lang', locale)
}
