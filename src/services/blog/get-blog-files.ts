import { readdir } from 'fs/promises';

import { BLOG_DIR } from './constants';

export const getBlogFiles = async () => readdir(BLOG_DIR);
