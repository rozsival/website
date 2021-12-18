import { Container, Typography } from '@mui/material';
import { ReactElement } from 'react';

import { Navigation } from './navigation';

export const Header = (): ReactElement => (
  <header>
    <Container>
      <Typography variant="h1">Vít Rozsíval</Typography>
      <Navigation />
    </Container>
  </header>
);
