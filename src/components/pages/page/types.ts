import { ReactElement } from 'react';

import { SeoProps } from '../../seo';

export type PageProps = {
  children: ReactElement;
  seo?: SeoProps;
};
