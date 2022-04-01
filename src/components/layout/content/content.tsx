import { Box, Container } from '@mui/material';
import { ReactElement } from 'react';

import { ContentProps } from './types';

export const Content = ({ children }: ContentProps): ReactElement => (
  <main>
    <Container>
      <Box pt={4}>{children}</Box>
    </Container>
  </main>
);
