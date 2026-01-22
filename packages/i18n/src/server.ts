// Server-side i18n utilities for Next.js server components
// Uses @formatjs/intl for server-side message formatting

import { createIntl, createIntlCache, type IntlShape } from 'react-intl';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
import { type Locale, locales, defaultLocale, isValidLocale } from './config.js';

// Import messages statically for bundler compatibility
import enMessages from './messages/en.json';
import csMessages from './messages/cs.json';

// Message store by locale
const messagesByLocale: Record<Locale, Record<string, unknown>> = {
  en: enMessages,
  cs: csMessages,
};

// Cache for Intl instances (one per locale)
const cache = createIntlCache();
const intlCache = new Map<Locale, IntlShape>();

// Flatten nested message object to dot-notation keys
function flattenMessages(
  obj: Record<string, unknown>,
  prefix = ''
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      result[fullKey] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenMessages(value as Record<string, unknown>, fullKey));
    }
  }

  return result;
}

// Get messages for a locale
function getMessages(locale: Locale): Record<string, string> {
  const messages = messagesByLocale[locale];
  return flattenMessages(messages);
}

// Get or create an Intl instance for a locale
export function getIntl(locale: Locale): IntlShape {
  const cached = intlCache.get(locale);
  if (cached) return cached;

  const messages = getMessages(locale);
  const intl = createIntl({ locale, messages }, cache);
  intlCache.set(locale, intl);

  return intl;
}

// Detect preferred locale from Accept-Language header
export function getPreferredLocale(acceptLanguage: string | null): Locale {
  if (acceptLanguage === null || acceptLanguage === '') return defaultLocale;

  const negotiator = new Negotiator({
    headers: { 'accept-language': acceptLanguage },
  });

  const languages = negotiator.languages();
  
  try {
    const matched = match(languages, locales.slice(), defaultLocale);
    return isValidLocale(matched) ? matched : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

// Format a message on the server
export function formatMessage(
  locale: Locale,
  id: string,
  values?: Record<string, string | number>
): string {
  const intl = getIntl(locale);
  return intl.formatMessage({ id }, values);
}

export { type Locale, locales, defaultLocale, isValidLocale } from './config.js';
