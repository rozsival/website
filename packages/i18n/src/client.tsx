'use client';

/**
 * Client-side i18n provider and hooks for React components
 */

import { get } from 'lodash-es';
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { IntlFormatters, PrimitiveType } from 'react-intl';
import { IntlProvider, useIntl } from 'react-intl';

import type { Messages, Locale, MessageKey, IntlShape } from './config.js';
import { defaultLocale } from './config.js';
import enMessages from './messages/en.json' with { type: 'json' };

interface I18nContextValue {
  locale: Locale;
}

const I18nContext = createContext<I18nContextValue>({ locale: defaultLocale });

interface I18nProviderProps {
  locale: Locale;
  messages: Messages;
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
  const { locale } = useContext(I18nContext);
  return locale;
}

/**
 * Extract the values type from react-intl's formatMessage
 */
type MessageValues = Parameters<IntlFormatters<ReactNode>['formatMessage']>[1];

/**
 * Returns an object with methods for translating messages in various formats
 */
export function useMessages() {
  const intl = useIntl() as IntlShape;

  return {
    t: (id: MessageKey, values?: MessageValues) =>
      intl.formatMessage({ id, defaultMessage: get(enMessages, id) }, values),
    formatString: (id: MessageKey, values?: Record<string, PrimitiveType>) =>
      intl.formatMessage({ id, defaultMessage: get(enMessages, id) }, values),
    formatDate: (value: Date | number | string, options?: Parameters<IntlFormatters['formatDate']>[1]) =>
      intl.formatDate(value, options),
    formatNumber: (value: bigint | number, options?: Parameters<IntlFormatters['formatNumber']>[1]) =>
      intl.formatNumber(value, options),
    formatTime: (value: Date | number | string, options?: Parameters<IntlFormatters['formatTime']>[1]) =>
      intl.formatTime(value, options),
  };
}
