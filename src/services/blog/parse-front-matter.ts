import { parseDate } from '../date';

import { BlogPostFrontMatter } from './types';

export type FrontMatter = Omit<BlogPostFrontMatter, 'date'> & {
  date: Date;
};

export const parseFrontMatter = <
  P extends { frontMatter: BlogPostFrontMatter },
>({
  frontMatter,
}: P): FrontMatter => ({ ...frontMatter, date: parseDate(frontMatter.date) });
