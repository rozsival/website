import { BlogPostFrontMatter } from '../../../services/blog';

export type BlogStaticProps = {
  posts: Array<{ frontMatter: BlogPostFrontMatter; slug: string }>;
};

export type BlogProps = BlogStaticProps;
