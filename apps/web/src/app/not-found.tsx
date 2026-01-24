'use client';

import { defaultLocale } from '@rozsival/i18n';
import Error from 'next/error';

/**
 * This page renders when a route like `/unknown.txt` is requested.
 * In this case, the layout at `app/[locale]/layout.tsx` receives
 * an invalid value as the `[locale]` param and calls `notFound()`.
 */
export default function GlobalNotFound() {
  return (
    <html lang={defaultLocale}>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
