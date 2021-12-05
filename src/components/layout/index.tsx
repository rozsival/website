import React, { Children, ReactElement } from 'react';
import { CssBaseline } from '@mui/material';

import { Content, ContentProps } from './content';
import { Footer } from './footer';
import { Header } from './header';

export const Layout = ({ children }: ContentProps): ReactElement => (
  <CssBaseline>
    <Header />
    <Content>{Children.only(children)}</Content>
    <Footer />
  </CssBaseline>
);
