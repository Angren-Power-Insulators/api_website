import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'
import uz from '@/locales/uz.json'

export const SUPPORTED_LOCALES = ['ru', 'uz', 'en']
export const DEFAULT_LOCALE = 'ru'
const STORAGE_KEY = 'locale'

function getInitialLocale () {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && SUPPORTED_LOCALES.includes(saved)) return saved

  const browserLang = navigator.language?.slice(0, 2)
  if (SUPPORTED_LOCALES.includes(browserLang)) return browserLang

  return DEFAULT_LOCALE
}

const initialLocale = getInitialLocale()

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { en, ru, uz },
})

export function setLocale (locale) {
  if (!SUPPORTED_LOCALES.includes(locale)) return
  i18n.global.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.setAttribute('lang', locale)
}

document.documentElement.setAttribute('lang', initialLocale)
