import path from 'node:path';

import { getMessages } from '@rozsival/i18n/server';
import { getAllPosts } from '@rozsival/mdx';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@rozsival/ui';
import { PenTool } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import type { LocalePageProps } from '@/types/locale';

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const { formatString } = getMessages(locale);

  const title = formatString('blog.title');
  const description = formatString('blog.description');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function BlogPage({ params }: LocalePageProps) {
  const { locale } = await params;
  const { formatDate, t } = getMessages(locale);

  // Get all blog posts for the current locale
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');
  const posts = await getAllPosts(postsDirectory, locale);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <h1 className="mb-4 flex items-center text-4xl font-bold tracking-tight">
              <PenTool className="mr-3 h-10 w-10 text-primary" />
              {t('blog.title')}
            </h1>
            <p className="text-lg text-muted-foreground">{t('blog.description')}</p>
          </div>

          {posts.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">{t('blog.empty')}</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/${locale}/blog/${post.slug}`}>
                  <Card className="transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {post.frontmatter.date ? (
                          <time dateTime={post.frontmatter.date}>
                            {formatDate(post.frontmatter.date, {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                        ) : null}
                        {/* eslint-disable-next-line formatjs/no-literal-string-in-jsx */}
                        {post.frontmatter.date ? <span>•</span> : null}
                        <span>{t('blog.readingTime', { minutes: post.readingTime })}</span>
                      </div>
                      <CardTitle className="text-2xl">{post.frontmatter.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{post.frontmatter.description}</CardDescription>
                      {post.frontmatter.tags && post.frontmatter.tags.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.frontmatter.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
