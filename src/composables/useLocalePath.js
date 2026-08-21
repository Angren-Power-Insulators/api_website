import { useI18n } from 'vue-i18n'
import { localizedPath } from '@/utils/localePath'

/**
 * Returns a function that turns a locale-neutral path into the current
 * locale's URL, for use on every internal `to`/`href` in the app.
 */
export function useLocalePath () {
  const { locale } = useI18n()
  return path => localizedPath(path, locale.value)
}
