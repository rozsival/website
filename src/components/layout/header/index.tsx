import { Container, Typography } from '@mui/material';
import { ReactElement } from 'react';

import { TITLE } from '../../../constants/seo';

import { Navigation } from './navigation';
import { StyledHeader } from './styles';

export const Header = (): ReactElement => (
  <StyledHeader>
    <Container>
      <Typography variant="h1">{TITLE}</Typography>
      <Navigation />
    </Container>
  </StyledHeader>
);
