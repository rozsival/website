/**
 * Type definitions for blog posts
 */

/**
 * Blog post frontmatter structure
 */
export interface PostFrontmatter {
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  published?: boolean;
  locale?: string;
}

/**
 * Parsed blog post
 */
export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: number;
  locale: string;
}
