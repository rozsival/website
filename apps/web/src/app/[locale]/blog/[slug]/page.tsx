import path from 'node:path';

import { getIntl, type Locale } from '@rozsival/i18n/server';
import { getPostBySlug, getAllPosts } from '@rozsival/mdx';
import { Button } from '@rozsival/ui';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');
  const post = await getPostBySlug(postsDirectory, slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');
  const posts = await getAllPosts(postsDirectory);

  // Generate params for all locales and posts
  return posts.flatMap((post) => [
    { locale: 'en', slug: post.slug },
    { locale: 'cs', slug: post.slug },
  ]);
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const intl = getIntl(locale as Locale);

  const t = (id: string, values?: Record<string, number | string>) => intl.formatMessage({ id }, values);

  const postsDirectory = path.join(process.cwd(), 'content', 'blog');
  const post = await getPostBySlug(postsDirectory, slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Button asChild className="mb-8" size="sm" variant="ghost">
            <Link href={`/${locale}/blog`}>{t('blog.back')}</Link>
          </Button>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime={post.frontmatter.date}>
                {new Date(post.frontmatter.date).toLocaleDateString(locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
              <span>•</span>
              <span>{t('blog.readingTime', { minutes: post.readingTime })}</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{post.frontmatter.title}</h1>
            <p className="text-xl text-muted-foreground">{post.frontmatter.description}</p>
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </header>

          {/* Content - rendered from MDX */}
          <div className="prose dark:prose-invert max-w-none">
            {/* 
              In production, you would use next-mdx-remote or similar to render the MDX.
              For now, we display a placeholder indicating the content location.
            */}
            <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
              <p>{t('blog.placeholder.title')}</p>
              <p className="text-sm mt-2">{t('blog.placeholder.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
