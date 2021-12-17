import { getBlogFiles } from './get-blog-files';
import { getPostSlug } from './get-post-slug';

const mapFileParameters = (file: string) => ({
  params: { slug: getPostSlug(file) },
});

export const getBlogPaths = async () => {
  const files = await getBlogFiles();
  const paths = files.map(mapFileParameters);
  return {
    paths,
    fallback: false,
  };
};
