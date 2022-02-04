import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';

import { BlogPostStaticProps } from '../../components/pages/blog/post';
import { getBlogPaths, getBlogPost } from '../../services/blog';

export const getStaticPaths: GetStaticPaths = async () => getBlogPaths();
export const getStaticProps: GetStaticProps<
  BlogPostStaticProps,
  Pick<BlogPostStaticProps, 'slug'>
> = async ({ params }) => {
  if (params?.slug) {
    const post = await getBlogPost(params.slug);
    return { props: { ...post, mdxSource: await serialize(post.mdxSource) } };
  }
  return { notFound: true };
};

export { BlogPost as default } from '../../components/pages/blog/post';
