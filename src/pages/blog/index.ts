import { GetStaticProps } from 'next';

import { BlogStaticProps } from '../../components/pages/blog/types';
import { getBlogPosts } from '../../services/blog';

export { Blog as default } from '../../components/pages/blog';

export const getStaticProps: GetStaticProps<BlogStaticProps> = async () => ({
  props: { posts: await getBlogPosts() },
});
