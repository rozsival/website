import type { ReactElement } from 'react';

import type { SeoProps } from '../../seo';

export type PageProps = {
  children: ReactElement;
  seo?: SeoProps;
};
