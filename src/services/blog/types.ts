import { GrayMatterFile } from 'gray-matter';

export type BlogPostFrontMatter = {
  date: string;
  description: string;
  image: string;
  title: string;
};

export interface BlogPostGrayMatter extends GrayMatterFile<Buffer> {
  data: BlogPostFrontMatter;
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
