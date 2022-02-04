import { GetStaticProps } from 'next';

import { BlogStaticProps } from '../../components/pages/blog';
import { getBlogPosts } from '../../services/blog';

export const getStaticProps: GetStaticProps<BlogStaticProps> = async () => ({
  props: { posts: await getBlogPosts() },
});

export { Blog as default } from '../../components/pages/blog';
