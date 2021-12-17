import { BLOG_EXT } from './constants';
import { getPostSource } from './get-post-source';
import { BlogPostSlug } from './types';

export const getBlogPost = async (slug: BlogPostSlug) => {
  const file = `${slug}${BLOG_EXT}`;
  const { frontMatter, mdxSource } = await getPostSource(file);
  return {
    frontMatter,
    mdxSource,
    slug,
  };
};
