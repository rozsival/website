import { getPostSource } from './get-post-source';
import { BlogPostSlug } from './types';

export const getBlogPost = async (slug: BlogPostSlug) => {
  const { frontMatter, mdxSource, scope } = await getPostSource(slug);
  return {
    frontMatter,
    mdxSource,
    scope,
    slug,
  };
};
