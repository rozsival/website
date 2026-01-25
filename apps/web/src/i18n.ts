import { defaultLocale, locales } from '@rozsival/i18n';
import type { Config } from 'next-i18n-router/dist/types';

export const i18nConfig = {
  defaultLocale,
  locales,
  prefixDefault: true,
} satisfies Config;
