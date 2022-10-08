import { Box, Container } from '@mui/material';
import type { ReactElement } from 'react';

import type { ContentProps } from './types';

export const Content = ({ children }: ContentProps): ReactElement => (
  <main>
    <Container>
      <Box pt={4}>{children}</Box>
    </Container>
  </main>
);
