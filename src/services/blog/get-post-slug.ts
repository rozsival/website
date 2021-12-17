import { BLOG_EXT } from './constants';

export const getPostSlug = (file: string) => file.replace(BLOG_EXT, '');
