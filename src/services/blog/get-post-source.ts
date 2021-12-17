import { readFile } from 'fs/promises';

import matter from 'gray-matter';

import { BLOG_DIR } from './constants';
import { BlogPostGrayMatter, BlogPostFrontMatter } from './types';

export const getPostSource = async (
  file: string,
): Promise<{ frontMatter: BlogPostFrontMatter; mdxSource: string }> => {
  const source = await readFile(`${BLOG_DIR}/${file}`);
  const { data, content } = matter(source) as BlogPostGrayMatter;
  if (Object.values(data).length > 0) {
    return { frontMatter: data, mdxSource: content };
  }
  throw new Error(`Blog post \`${file}\` is missing front matter.`);
};
