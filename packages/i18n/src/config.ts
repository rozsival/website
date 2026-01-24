// Configuration and types for the i18n system
import type enMessages from './messages/en.json';

export const locales = ['en', 'cs'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// Validate that a string is a supported locale
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

// Get locale display name
export function getLocaleName(locale: Locale): string {
  const names: Record<Locale, string> = {
    en: 'English',
    cs: 'Čeština',
  };
  return names[locale];
}

// Get locale flag emoji
export function getLocaleFlag(locale: Locale): string {
  const flags: Record<Locale, string> = {
    en: '🇺🇸',
    cs: '🇨🇿',
  };
  return flags[locale];
}

// Generate typesafe message keys from en.json
type PathsToFields<T, P extends string = ''> = {
  [K in string & keyof T]: T[K] extends string
    ? `${P}${K}`
    : T[K] extends Record<string, unknown>
      ? PathsToFields<T[K], `${P}${K}.`>
      : never;
}[string & keyof T];

export type MessageKey = PathsToFields<typeof enMessages>;
