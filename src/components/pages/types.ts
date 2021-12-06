import { ReactElement } from 'react';

import { SeoProps } from '../seo/types';

export type PageProps = {
  children: ReactElement;
  seo?: SeoProps;
};
