/**
 * MDX file parsing utilities
 */

import fs from 'node:fs/promises';
import path from 'node:path';

import matter from 'gray-matter';
import readingTime from 'reading-time';

import type { Post, PostFrontmatter } from './types.js';
import { exists } from './utils.js';

/**
 * Parse a single MDX file
 * @param filePath - Path to the MDX file
 * @param slug - Optional slug override (for directory-based structure)
 * @param locale - Optional locale override (for directory-based structure)
 */
export async function parsePost(filePath: string, slug?: string, locale?: string): Promise<Post> {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);

  // For directory-based structure, slug comes from parent directory
  // For flat files, slug comes from filename
  const extractedSlug = slug ?? path.basename(filePath, path.extname(filePath));

  // For directory-based structure, locale comes from filename
  // For flat files, locale comes from frontmatter or defaults to 'en'
  const extractedLocale = locale ?? path.basename(filePath, path.extname(filePath));

  // Try to load shared metadata from meta.json in the same directory
  let sharedMeta: Record<string, unknown> = {};
  const directory = path.dirname(filePath);
  const metaPath = path.join(directory, 'meta.json');

  try {
    if (await exists(metaPath)) {
      const metaContent = await fs.readFile(metaPath, 'utf-8');
      sharedMeta = JSON.parse(metaContent) as Record<string, unknown>;
    }
  } catch {
    // Ignore meta.json errors
  }

  // Merge shared meta with frontmatter (frontmatter takes precedence)
  const tags = new Set([...((sharedMeta.tags ?? []) as string[]), ...((frontmatter.tags ?? []) as string[])]);

  const mergedFrontmatter = {
    ...sharedMeta,
    ...frontmatter,
    tags: Array.from(tags),
  } as PostFrontmatter;

  const stats = readingTime(content);

  return {
    slug: extractedSlug,
    frontmatter: mergedFrontmatter,
    content,
    readingTime: Math.ceil(stats.minutes),
    locale: extractedLocale,
  };
}
