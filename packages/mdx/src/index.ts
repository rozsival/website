// MDX processing utilities

import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

// Blog post frontmatter structure
export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  published?: boolean;
  locale?: string;
};

// Parsed blog post
export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: number;
};

// Parse a single MDX file
export async function parsePost(filePath: string): Promise<Post> {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  
  const slug = path.basename(filePath, path.extname(filePath));
  const stats = readingTime(content);
  
  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
    readingTime: Math.ceil(stats.minutes),
  };
}

// Get all posts from a directory
export async function getAllPosts(
  postsDirectory: string,
  locale?: string
): Promise<Post[]> {
  const exists = await fs.access(postsDirectory).then(() => true).catch(() => false);
  if (!exists) return [];

  const files = await fs.readdir(postsDirectory);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'));
  
  const posts = await Promise.all(
    mdxFiles.map((file) => parsePost(path.join(postsDirectory, file)))
  );
  
  // Filter by locale if specified
  const filteredPosts = locale !== undefined && locale !== null
    ? posts.filter((post) => post.frontmatter.locale === undefined || post.frontmatter.locale === null || post.frontmatter.locale === locale)
    : posts;
  
  // Filter out unpublished posts in production
  const publishedPosts = process.env['NODE_ENV'] === 'production'
    ? filteredPosts.filter((post) => post.frontmatter.published !== false)
    : filteredPosts;
  
  // Sort by date, newest first
  return publishedPosts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

// Get a single post by slug
export async function getPostBySlug(
  postsDirectory: string,
  slug: string
): Promise<Post | undefined> {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  
  try {
    return await parsePost(filePath);
  } catch {
    return undefined;
  }
}
