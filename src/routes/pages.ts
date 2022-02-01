export const HOME = '/';
export const BLOG = 'blog';

const createPageRoute = (...path: string[]): string =>
  `${HOME}${path.join(HOME)}`;

export const pageRoutes = {
  home: HOME,
  blog: {
    index: createPageRoute(BLOG),
    post: (slug: string) => createPageRoute(BLOG, slug),
  },
};
