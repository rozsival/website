# @rozsival/i18n

Internationalization with react-intl for server and client components.

## Supported Locales

- `en` - English (default)
- `cs` - Czech

## Usage

### Server Components

```tsx
import { getIntl, formatMessage, type Locale } from '@rozsival/i18n/server';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const intl = await getIntl(params.locale);
  const title = intl.formatMessage({ id: 'home.hero.title' });
  
  // Or use the helper function
  const subtitle = await formatMessage(params.locale, 'home.hero.subtitle');
  
  return <h1>{title}</h1>;
}
```

### Client Components

```tsx
'use client';

import { useMessages } from '@rozsival/i18n/client';

export function Hero() {
  const { t } = useMessages();
  
  return (
    <h1>{t('home.hero.title')}</h1>
  );
}
```

### Layout Setup

```tsx
// app/[locale]/layout.tsx
import { I18nProvider } from '@rozsival/i18n/client';
import { getIntl, type Locale } from '@rozsival/i18n/server';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const intl = await getIntl(params.locale);
  
  return (
    <I18nProvider locale={params.locale} messages={intl.messages}>
      {children}
    </I18nProvider>
  );
}
```

## Message Structure

Messages are organized hierarchically in JSON files:

```json
{
  "common": {
    "navigation": {
      "home": "Home"
    }
  },
  "home": {
    "hero": {
      "title": "Full-Stack Developer"
    }
  }
}
```

Access with dot notation: `common.navigation.home`, `home.hero.title`.
