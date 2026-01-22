'use client';

// Client-side i18n provider and hooks for React components

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from 'react';
import { IntlProvider, useIntl as useReactIntl } from 'react-intl';
import { type Locale, defaultLocale } from './config.js';

type I18nContextValue = {
  locale: Locale;
};

const I18nContext = createContext<I18nContextValue>({ locale: defaultLocale });

type I18nProviderProps = {
  locale: Locale;
  messages: Record<string, string>;
  children: ReactNode;
};

export function I18nProvider({ locale, messages, children }: I18nProviderProps) {
  const value = useMemo(() => ({ locale }), [locale]);

  return (
    <I18nContext.Provider value={value}>
      <IntlProvider locale={locale} messages={messages} defaultLocale={defaultLocale}>
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
}

// Hook to get current locale
export function useLocale(): Locale {
  return useContext(I18nContext).locale;
}

// Re-export react-intl's useIntl for message formatting
export { useIntl } from 'react-intl';

// Convenient hook for formatting messages with explicit return type
export function useMessages(): {
  t: (id: string, values?: Record<string, string | number>) => string;
  formatDate: (value: Date | number | string) => string;
  formatNumber: (value: number) => string;
  formatTime: (value: Date | number | string) => string;
} {
  const intl = useReactIntl();

  return {
    t: (id: string, values?: Record<string, string | number>) =>
      intl.formatMessage({ id }, values),
    formatDate: (value: Date | number | string) => intl.formatDate(value),
    formatNumber: (value: number) => intl.formatNumber(value),
    formatTime: (value: Date | number | string) => intl.formatTime(value),
  };
}
