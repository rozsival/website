import { parseDate } from '../date';

import { getBlogDirectories } from './get-blog-directories';
import { getPostSource } from './get-post-source';
import { BlogPostFrontMatter, BlogPostTile } from './types';

const getTime = ({ date }: BlogPostFrontMatter) => parseDate(date).getTime();

const mapTile = async (slug: string): Promise<BlogPostTile> => {
  const { frontMatter } = await getPostSource(slug);
  return { frontMatter, slug };
};

export const getBlogPosts = async () => {
  const directories = await getBlogDirectories();
  const posts = await Promise.all(directories.map(mapTile));
  return posts.sort(
    (left, right) => getTime(right.frontMatter) - getTime(left.frontMatter),
  );
};
