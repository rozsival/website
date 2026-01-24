/**
 * Server-side i18n utilities for Next.js server components
 * Uses @formatjs/intl for server-side message formatting
 */

import { match } from '@formatjs/intl-localematcher';
import { get } from 'lodash-es';
import Negotiator from 'negotiator';
import { createIntl, createIntlCache, type PrimitiveType, type IntlFormatters } from 'react-intl';

import type { Messages, Locale, MessageKey, IntlShape } from './config.js';
import { locales, defaultLocale, isValidLocale } from './config.js';
import csMessages from './messages/cs.json' with { type: 'json' };
import enMessages from './messages/en.json' with { type: 'json' };

/**
 * Message store by locale
 */
const messagesByLocale: Record<Locale, typeof enMessages> = {
  en: enMessages,
  cs: csMessages,
};

/**
 * Cache for Intl instances (one per locale)
 */
const cache = createIntlCache();
const intlCache = new Map<Locale, IntlShape>();

/**
 * Flatten nested message object to dot-notation keys
 */
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

/**
 * Get messages for a locale
 */
function getMessagesForLocale(locale: Locale) {
  const messages = messagesByLocale[locale];
  return flattenMessages(messages) as Messages;
}

/**
 * Get or create an Intl instance for a locale
 */
export function getIntl(locale: Locale): IntlShape {
  const validatedLocale = isValidLocale(locale) ? locale : defaultLocale;
  const cached = intlCache.get(validatedLocale);
  if (cached) return cached;

  const messages = getMessagesForLocale(validatedLocale);
  const intl = createIntl({ locale: validatedLocale, messages }, cache) as IntlShape;
  intlCache.set(validatedLocale, intl);

  return intl;
}

/**
 * Parse and validate a locale string, returning a valid Locale or defaultLocale
 * Uses the isValidLocale typeguard to ensure type safety
 */
export function parseLocale(locale: string): Locale {
  return isValidLocale(locale) ? locale : defaultLocale;
}

/**
 * Detect preferred locale from Accept-Language header
 */
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

/**
 * Extract the values type from react-intl's formatMessage (string version)
 */
type MessageValues = Parameters<IntlFormatters<string>['formatMessage']>[1];

/**
 * Server-side equivalent of useMessages hook
 * Returns an object with methods for translating messages in various formats
 *
 * @example
 * const { t } = getMessages(locale);
 * const title = t('home.hero.title');
 */
export function getMessages(locale: Locale) {
  const validatedLocale = parseLocale(locale);
  const intl = getIntl(validatedLocale);

  return {
    t: (id: MessageKey, values?: MessageValues) =>
      intl.formatMessage({ id, defaultMessage: get(enMessages, id) }, values),
    formatString: (id: MessageKey, values?: Record<string, PrimitiveType>) =>
      intl.formatMessage({ id, defaultMessage: get(enMessages, id) }, values),
    formatDate: (value: Date | number | string) => intl.formatDate(value),
    formatNumber: (value: number) => intl.formatNumber(value),
    formatTime: (value: Date | number | string) => intl.formatTime(value),
  };
}

export { type Locale, locales, defaultLocale, isValidLocale } from './config.js';
