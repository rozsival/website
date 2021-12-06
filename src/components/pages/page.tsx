import { ReactElement } from 'react';

import { Seo } from '../seo';

import { PageProps } from './types';

export const Page = ({ children, seo = {} }: PageProps): ReactElement => (
  <>
    <Seo title={seo.title} />
    {children}
  </>
);
