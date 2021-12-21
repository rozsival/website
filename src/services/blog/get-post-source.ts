import { readFile } from 'fs/promises';

import matter from 'gray-matter';

import { BLOG } from '../../routes';

import { BLOG_DIR } from './constants';
import { BlogPostGrayMatter, BlogPostSource } from './types';

const getScope = async (slug: string): Promise<Record<string, unknown>> => {
  try {
    const scope = await import(`../../${BLOG}/${slug}/scope`);
    return { ...scope };
  } catch {
    return {};
  }
};

export const getPostSource = async (slug: string): Promise<BlogPostSource> => {
  const source = await readFile(`${BLOG_DIR}/${slug}/content.mdx`);
  const { data, content } = matter(source) as BlogPostGrayMatter;
  if (Object.values(data).length > 0) {
    return {
      frontMatter: data,
      mdxSource: content,
      scope: await getScope(slug),
    };
  }
  throw new Error(`Blog post \`${slug}\` is missing front matter.`);
};
