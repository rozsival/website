import { Box, Container } from '@mui/material';
import { ReactElement } from 'react';

import { ContentProps } from './types';

export const Content = ({ children }: ContentProps): ReactElement => (
  <Container>
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  </Container>
);
