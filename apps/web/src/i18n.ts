import { defaultLocale, locales } from '@rozsival/i18n';
import type { I18NConfig } from 'next/dist/server/config-shared';

export const i18nConfig = {
  defaultLocale,
  locales,
} satisfies I18NConfig;
