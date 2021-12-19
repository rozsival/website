import React, { ReactElement } from 'react';
import { CssBaseline } from '@mui/material';

import { Content } from './content';
import { Footer } from './footer';
import { Header } from './header';
import { LayoutProps } from './types';
import { Transition } from './transition';

export const Layout = ({ children }: LayoutProps): ReactElement => (
  <CssBaseline>
    <Header />
    <Transition>
      <Content>{children}</Content>
    </Transition>
    <Footer />
  </CssBaseline>
);
