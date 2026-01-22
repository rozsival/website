# @rozsival/web

Main Next.js website for Vít Rozsíval.

## Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Type check
pnpm typecheck

# Lint
pnpm lint
```

## Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx        # Root layout with fonts
│   ├── page.tsx          # Redirects to default locale
│   └── [locale]/
│       ├── layout.tsx    # Locale layout with i18n provider
│       ├── page.tsx      # Homepage
│       ├── story/
│       ├── cv/
│       ├── contact/
│       └── blog/
├── components/
│   ├── header.tsx
│   └── footer.tsx
└── middleware.ts         # i18n routing
```

## Features

- **i18n**: English and Czech with automatic locale detection
- **Dark mode**: System preference with manual toggle
- **Blog**: MDX-powered static content
- **SEO**: Proper metadata and Open Graph tags
- **Responsive**: Mobile-first design

## Environment Variables

None required for local development. For production:

- Configure Vercel project settings
- Set up any analytics or form handling services
