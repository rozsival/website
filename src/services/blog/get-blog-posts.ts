import { parseDate } from '../date';

import { getBlogFiles } from './get-blog-files';
import { getPostSource } from './get-post-source';
import { getPostSlug } from './get-post-slug';
import { BlogPostFrontMatter, BlogPostTile } from './types';

const getTime = ({ date }: BlogPostFrontMatter) => parseDate(date).getTime();

const mapTile = async (file: string): Promise<BlogPostTile> => {
  const { frontMatter } = await getPostSource(file);
  return { frontMatter, slug: getPostSlug(file) };
};

export const getBlogPosts = async () => {
  const files = await getBlogFiles();
  const posts = await Promise.all(files.map(mapTile));
  return posts.sort(
    (left, right) => getTime(right.frontMatter) - getTime(left.frontMatter),
  );
};
