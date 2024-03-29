import { CssBaseline } from '@mui/material';
import type { ReactElement } from 'react';

import { Content } from './content';
import { Footer } from './footer';
import { Header } from './header';
import { Transition } from './transition';
import type { LayoutProps } from './types';

export const Layout = ({ children }: LayoutProps): ReactElement => (
  <CssBaseline>
    <Header />
    <Transition>
      <Content>{children}</Content>
    </Transition>
    <Footer />
  </CssBaseline>
);
