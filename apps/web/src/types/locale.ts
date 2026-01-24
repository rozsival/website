/**
 * Base types for Next.js pages with locale support
 */

/**
 * Base params interface for localized routes
 */
export interface LocaleParams {
  locale: string;
}

/**
 * Base props interface for pages with locale param
 */
export interface LocalePageProps<P extends object = object> {
  params: Promise<LocaleParams & P>;
}

/**
 * Base props interface for layouts with locale param
 */
export interface LocaleLayoutProps<P extends object = object> {
  params: Promise<LocaleParams & P>;
  children: React.ReactNode;
}
