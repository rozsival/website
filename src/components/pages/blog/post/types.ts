import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import {
  BlogPostSlug,
  BlogPostSource,
  BlogPostFrontMatter,
} from '../../../../services/blog';

export type BlogPostStaticProps = Pick<
  BlogPostSource,
  'frontMatter' | 'scope'
> & {
  mdxSource: MDXRemoteSerializeResult;
  slug: BlogPostSlug;
};

export type BlogPostProps = BlogPostStaticProps;

export type CardProps = {
  frontMatter: BlogPostFrontMatter;
  slug: string;
};
