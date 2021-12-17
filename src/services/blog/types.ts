import { GrayMatterFile } from 'gray-matter';

export type BlogPostFrontMatter = {
  date: string;
  description: string;
  thumbnailUrl: string;
  title: string;
};

export interface BlogPostGrayMatter extends GrayMatterFile<Buffer> {
  data: BlogPostFrontMatter;
}

export type BlogPostSlug = string;

export type BlogPostTile = {
  frontMatter: BlogPostFrontMatter;
  slug: BlogPostSlug;
};
