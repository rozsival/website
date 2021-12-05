import { Box, Container } from '@mui/material';
import { ReactElement } from 'react';

import { MAX_WIDTH } from '../constants';

export type ContentProps = {
  children: ReactElement;
};

export const Content = ({ children }: ContentProps): ReactElement => (
  <Container maxWidth={MAX_WIDTH}>
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
