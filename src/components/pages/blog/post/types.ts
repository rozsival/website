import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { DetailedHTMLProps, HTMLProps } from 'react';

import { BlogPostSlug, BlogPostSource } from '../../../../services/blog';

export type BlogPostStaticProps = Pick<
  BlogPostSource,
  'frontMatter' | 'scope'
> & {
  mdxSource: MDXRemoteSerializeResult;
  slug: BlogPostSlug;
};

export type BlogPostProps = BlogPostStaticProps;

export type CodeProps = DetailedHTMLProps<
  HTMLProps<HTMLDivElement>,
  HTMLDivElement
> & { language?: string };
