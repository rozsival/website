// Configuration and types for the i18n system

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
