# AGENTS.md

Personal website monorepo (Next.js 16, React 19, TypeScript 5.9).

## Structure

apps/
web/ # Next.js site (@rozsival/web, port 3000)
storybook/ # Component docs
packages/
i18n/ # i18n utilities (@rozsival/i18n)
mdx/ # Blog content (@rozsival/mdx)
theme/ # Design tokens (@rozsival/theme)
ui/ # Shared components (@rozsival/ui)

## Key Info

- Turborepo + pnpm workspaces
- Multi-language (en/cs) with i18n
- MDX blog posts
- Strict TS 5.9 + ESLint 9 + Prettier
- No path aliases in packages (only apps)
- Deployed to Vercel

## Commands

pnpm run dev # All servers
pnpm run build # Build all
pnpm run qa # Type + lint + format
pnpm run test # Run tests

## i18n

Locales: en (default), cs; messages in packages/i18n/src/messages/
Server: getMessages(parseLocale(locale)) → { t, formatString }
Client: useMessages() → { t }

## MDX

Posts: content/blog/[slug]/[locale].md
API: getAllPosts(postsDir, locale), getPostBySlug(...)
