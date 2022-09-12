import { GrayMatterFile } from 'gray-matter';
import { StaticImageData } from 'next/image';

export type RawBlogPostFrontMatter = {
  date: string;
  description: string;
  image: string;
  title: string;
};

export type BlogPostFrontMatter = Omit<RawBlogPostFrontMatter, 'image'> & {
  image: StaticImageData;
};

export interface BlogPostGrayMatter extends GrayMatterFile<Buffer> {
  data: RawBlogPostFrontMatter;
}

export type BlogPostSlug = string;

export type BlogPostSource = {
  frontMatter: BlogPostFrontMatter;
  mdxSource: string;
  scope: Record<string, unknown>;
};

export type BlogPostTile = {
  frontMatter: BlogPostFrontMatter;
  slug: BlogPostSlug;
};

export type BlogPostScope = Record<string, unknown>;
