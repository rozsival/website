'use client';

/**
 * Client-side i18n provider and hooks for React components
 */

import type { FormatDateOptions, FormatNumberOptions, FormatTimeOptions } from '@formatjs/intl';
import { get } from 'lodash-es';
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { IntlProvider, useIntl } from 'react-intl';

import type { Messages, Locale, MessageKey, IntlShape, MessageValues, MessageStringValues } from './config.js';
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
 * Returns an object with methods for translating messages in various formats
 */
export function useMessages() {
  const intl = useIntl() as IntlShape;

  return {
    t: (id: MessageKey, values?: MessageValues) =>
      intl.formatMessage({ id, defaultMessage: get(enMessages, id) }, values),
    formatString: (id: MessageKey, values?: MessageStringValues) =>
      intl.formatMessage({ id, defaultMessage: get(enMessages, id) }, values),
    formatDate: (value: Date | number | string, options?: FormatDateOptions) => intl.formatDate(value, options),
    formatNumber: (value: bigint | number, options?: FormatNumberOptions) => intl.formatNumber(value, options),
    formatTime: (value: Date | number | string, options?: FormatTimeOptions) => intl.formatTime(value, options),
  };
}
