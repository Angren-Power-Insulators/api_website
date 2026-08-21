// Relative import (not the "@" alias) so this module also works when loaded
// directly by plain Node — see scripts/generate-sitemap.mjs.
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '../constants.js'

const PREFIXED_LOCALES = SUPPORTED_LOCALES.filter(loc => loc !== DEFAULT_LOCALE)

/**
 * Prefixes a locale-neutral path ("/", "/catalogue", "/catalogue/3") with the
 * given locale, except for the default locale which is served unprefixed.
 * Plain JS (no Vue) so it can also run inside the Node sitemap script.
 */
export function localizedPath (path, locale) {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (!locale || locale === DEFAULT_LOCALE) return clean
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`
}

/**
 * Reverses localizedPath(): strips a "/en" or "/uz" prefix off a resolved
 * URL path, giving back the locale-neutral path.
 */
export function neutralizePath (path) {
  for (const loc of PREFIXED_LOCALES) {
    if (path === `/${loc}`) return '/'
    if (path.startsWith(`/${loc}/`)) return path.slice(loc.length + 1)
  }
  return path
}
