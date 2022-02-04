import { Container, Typography } from '@mui/material';
import { ReactElement } from 'react';

import { SEO_TITLE } from '../../../constants';

import { Navigation } from './navigation';
import { StyledHeader } from './styles';

export const Header = (): ReactElement => (
  <StyledHeader>
    <Container>
      <Typography variant="h1">{SEO_TITLE}</Typography>
      <Navigation />
    </Container>
  </StyledHeader>
);
