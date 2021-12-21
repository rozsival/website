import { getBlogDirectories } from './get-blog-directories';

export const getBlogPaths = async () => {
  const directories = await getBlogDirectories();
  const paths = directories.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
