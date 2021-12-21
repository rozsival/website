import { readdir } from 'fs/promises';

import { BLOG_DIR } from './constants';

export const getBlogDirectories = async () => {
  const dirents = await readdir(BLOG_DIR, { withFileTypes: true });
  return dirents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};
