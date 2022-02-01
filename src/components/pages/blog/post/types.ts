import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ReactNode } from 'react';

import { BlogPostSlug, BlogPostSource } from '../../../../services/blog';

export type BlogPostStaticProps = Pick<
  BlogPostSource,
  'frontMatter' | 'scope'
> & {
  mdxSource: MDXRemoteSerializeResult;
  slug: BlogPostSlug;
};

export type BlogPostProps = BlogPostStaticProps;

export type CodeProps = { children: ReactNode; language?: string };
