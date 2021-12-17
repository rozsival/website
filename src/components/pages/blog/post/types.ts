import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { BlogPostFrontMatter } from '../../../../services/blog';

export type BlogPostStaticProps = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: BlogPostFrontMatter;
  slug: string;
};

export type BlogPostProps = BlogPostStaticProps;
