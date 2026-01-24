'use client';

/**
 * Client-side i18n provider and hooks for React components
 */

import { get } from 'lodash-es';
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { IntlProvider, useIntl as useReactIntl, type IntlFormatters } from 'react-intl';

import { type Locale, defaultLocale, type MessageKey } from './config.js';
import enMessages from './messages/en.json' with { type: 'json' };

interface I18nContextValue {
  locale: Locale;
}

const I18nContext = createContext<I18nContextValue>({ locale: defaultLocale });

interface I18nProviderProps {
  locale: Locale;
  messages: Record<string, string>;
  children: ReactNode;
}

export function I18nProvider({ locale, messages, children }: I18nProviderProps) {
  const value = useMemo(() => ({ locale }), [locale]);

  return (
    <I18nContext.Provider value={value}>
      <IntlProvider defaultLocale={defaultLocale} locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
}

/**
 * Hook to get current locale
 */
export function useLocale(): Locale {
  return useContext(I18nContext).locale;
}

/**
 * Extract the values type from react-intl's formatMessage
 */
type MessageValues = Parameters<IntlFormatters<ReactNode>['formatMessage']>[1];

/**
 * Convenient hook for formatting messages with explicit return type
 */
export function useMessages(): {
  t: (id: MessageKey, values?: MessageValues) => ReactNode;
  formatDate: (value: Date | number | string) => string;
  formatNumber: (value: number) => string;
  formatTime: (value: Date | number | string) => string;
} {
  const intl = useReactIntl();

  return {
    t: (id: MessageKey, values?: MessageValues) =>
      intl.formatMessage({ id, defaultMessage: get(enMessages, id) }, values),
    formatDate: (value: Date | number | string) => intl.formatDate(value),
    formatNumber: (value: number) => intl.formatNumber(value),
    formatTime: (value: Date | number | string) => intl.formatTime(value),
  };
}
