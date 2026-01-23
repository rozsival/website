// Server-side i18n utilities for Next.js server components
// Uses @formatjs/intl for server-side message formatting

import { match } from '@formatjs/intl-localematcher';
import { get } from 'lodash-es';
import Negotiator from 'negotiator';
import { createIntl, createIntlCache, type IntlShape } from 'react-intl';

import { type Locale, locales, defaultLocale, isValidLocale } from './config.js';
import csMessages from './messages/cs.json' with { type: 'json' };
import enMessages from './messages/en.json' with { type: 'json' };

// Message store by locale
const messagesByLocale: Record<Locale, Record<string, unknown>> = {
  en: enMessages,
  cs: csMessages,
};

// Cache for Intl instances (one per locale)
const cache = createIntlCache();
const intlCache = new Map<Locale, IntlShape>();

// Flatten nested message object to dot-notation keys
function flattenMessages(object: Record<string, unknown> | null | undefined, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};
  if (!object) return result;

  for (const [key, value] of Object.entries(object)) {
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
  const validatedLocale = isValidLocale(locale) ? locale : defaultLocale;
  const cached = intlCache.get(validatedLocale);
  if (cached) return cached;

  const messages = getMessages(validatedLocale);
  const intl = createIntl({ locale: validatedLocale, messages }, cache);
  intlCache.set(validatedLocale, intl);

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
export function formatMessage(locale: Locale, id: string, values?: Record<string, number | string>): string {
  const validatedLocale = isValidLocale(locale) ? locale : defaultLocale;
  const intl = getIntl(validatedLocale);

  return intl.formatMessage({ id, defaultMessage: get(enMessages, id, '') }, values);
}

export { type Locale, locales, defaultLocale, isValidLocale } from './config.js';
