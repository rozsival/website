import React, { ReactElement } from 'react';
import { CssBaseline } from '@mui/material';

import { Content } from './content';
import { Footer } from './footer';
import { Header } from './header';
import { LayoutProps } from './types';

export const Layout = ({ children }: LayoutProps): ReactElement => (
  <CssBaseline>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </CssBaseline>
);
