import { Box, Container } from '@mui/material';
import { ReactElement } from 'react';

import { ContentProps } from './types';

export const Content = ({ children }: ContentProps): ReactElement => (
  <main>
    <Container>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        my={4}
      >
        {children}
      </Box>
    </Container>
  </main>
);
