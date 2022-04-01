import { readFile } from 'fs/promises';

import matter from 'gray-matter';
import { StaticImageData } from 'next/image';

import { BLOG } from '../../routes';

import { BLOG_DIR } from './constants';
import { BlogPostGrayMatter, BlogPostSlug, BlogPostSource } from './types';

const getScope = async (
  slug: BlogPostSlug,
): Promise<Record<string, unknown>> => {
  try {
    const scope = await import(`../../${BLOG}/${slug}/scope`);
    return { ...scope };
  } catch {
    return {};
  }
};

export const getPostSource = async (
  slug: BlogPostSlug,
): Promise<BlogPostSource> => {
  const source = await readFile(`${BLOG_DIR}/${slug}/content.mdx`);
  const { data, content } = matter(source) as BlogPostGrayMatter;
  if (Object.values(data).length > 0) {
    const scope = await getScope(slug);
    const image = scope[data.image] as StaticImageData | undefined;
    if (typeof image === 'undefined') {
      throw new TypeError(
        `Blog post image \`${data.image}\` is \`undefined\` in scope.`,
      );
    }
    return {
      frontMatter: {
        ...data,
        image,
      },
      mdxSource: content,
      scope,
    };
  }
  throw new Error(`Blog post \`${slug}\` is missing front matter.`);
};
