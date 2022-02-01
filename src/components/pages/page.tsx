import { ReactElement } from 'react';

import { Seo } from '../seo';

import { PageProps } from './types';

export const Page = ({ children, seo = {} }: PageProps): ReactElement => (
  <>
    <Seo
      description={seo.description}
      image={seo.image}
      title={seo.title}
      url={seo.url}
    />
    {children}
  </>
);
