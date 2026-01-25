/**
 * Blog post retrieval functions
 */

import fs from 'node:fs/promises';
import path from 'node:path';

import { parsePost } from './parser.js';
import type { Post } from './types.js';
import { exists, isDirectory, isMdxFile, MDX_EXTENSIONS } from './utils.js';

/**
 * Get all posts from a directory
 * Supports both structures:
 * - Flat: content/blog/post-name.md
 * - Directory-based: content/blog/post-name/en.md
 */
export async function getAllPosts(postsDirectory: string, locale?: string): Promise<Post[]> {
  if (!(await exists(postsDirectory))) return [];

  const entries = await fs.readdir(postsDirectory);
  const posts: Post[] = [];

  for (const entry of entries) {
    const entryPath = path.join(postsDirectory, entry);
    const isDirectoryEntry = await isDirectory(entryPath);

    if (isDirectoryEntry) {
      // Directory-based structure: [slug]/[locale].md(x)
      const slug = entry;
      const files = await fs.readdir(entryPath);
      const mdxFiles = files.filter(isMdxFile);

      for (const file of mdxFiles) {
        const fileLocale = path.basename(file, path.extname(file));
        const filePath = path.join(entryPath, file);

        // If locale filter is specified, only include matching posts
        if (locale == null || fileLocale === locale) {
          const post = await parsePost(filePath, slug, fileLocale);
          posts.push(post);
        }
      }
    } else if (isMdxFile(entry)) {
      // Flat file structure (backward compatibility)
      const post = await parsePost(entryPath);

      // Filter by locale if specified (using frontmatter locale)
      if (locale == null || post.frontmatter.locale == null || post.frontmatter.locale === locale) {
        posts.push(post);
      }
    }
  }

  /**
   * Filter out unpublished posts in production
   */
  const publishedPosts =
    process.env['NODE_ENV'] === 'production' ? posts.filter((post) => post.frontmatter.published !== false) : posts;

  /**
   * Sort by date, newest first
   */
  return publishedPosts.sort((a, b) => {
    const dateA = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0;
    const dateB = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0;
    return dateB - dateA;
  });
}

/**
 * Get a single post by slug and locale
 * Supports both structures:
 * - Directory-based: content/blog/[slug]/[locale].md(x)
 * - Flat file: content/blog/[slug].md(x) (backward compatibility)
 */
export async function getPostBySlug(postsDirectory: string, slug: string, locale?: string): Promise<Post | undefined> {
  // Try directory-based structure first
  if (locale != null) {
    const slugDirectory = path.join(postsDirectory, slug);
    const isDirectoryStructure = await isDirectory(slugDirectory);

    if (isDirectoryStructure) {
      for (const extension of MDX_EXTENSIONS) {
        const filePath = path.join(slugDirectory, `${locale}${extension}`);
        if (await exists(filePath)) {
          return await parsePost(filePath, slug, locale);
        }
      }
    }
  }

  // Fall back to flat file structure
  for (const extension of MDX_EXTENSIONS) {
    const filePath = path.join(postsDirectory, `${slug}${extension}`);
    if (await exists(filePath)) {
      const post = await parsePost(filePath);

      // If locale is specified, check if it matches
      if (locale != null && post.frontmatter.locale != null && post.frontmatter.locale !== locale) {
        continue;
      }

      return post;
    }
  }

  return undefined;
}
