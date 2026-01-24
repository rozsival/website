import { getPreferredLocale, locales, defaultLocale, isValidLocale } from '@rozsival/i18n/server';
import { NextResponse, type NextRequest } from 'next/server';

/**
 * Cookie name for storing user's language preference
 */
const LOCALE_COOKIE = 'NEXT_LOCALE';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /**
   * Skip proxy for static files and API routes
   */
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next();
  }

  /**
   * Check if the pathname starts with a locale
   */
  const pathnameLocale = locales.find((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameLocale) {
    const response = NextResponse.next();
    const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

    /**
     * Update cookie if it differs from current path locale
     * This allows users to switch languages and have it persisted
     */
    if (cookieLocale !== pathnameLocale) {
      response.cookies.set(LOCALE_COOKIE, pathnameLocale, {
        path: '/',
        // eslint-disable-next-line no-magic-numbers
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: 'lax',
      });
    }

    return response;
  }

  /**
   * Check for saved locale preference in cookie
   */
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  /**
   * Determine the user's preferred locale (cookie > Accept-Language header)
   */
  let locale: string;

  if (typeof cookieLocale === 'string' && isValidLocale(cookieLocale)) {
    locale = cookieLocale;
  } else {
    const acceptLanguage = request.headers.get('accept-language');
    const preferredLocale = getPreferredLocale(acceptLanguage);
    locale = isValidLocale(preferredLocale) ? preferredLocale : defaultLocale;
  }

  /**
   * Redirect to the localized path
   */
  const response = NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));

  /**
   * Set the locale cookie for future visits
   */
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: '/',
    // eslint-disable-next-line no-magic-numbers
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
