import { Box, Container, Typography } from '@mui/material';
import { ReactElement } from 'react';

export const Footer = (): ReactElement => (
  <footer>
    <Container>
      <Box textAlign="center" py={4}>
        <Typography>
          &copy; {new Date().getFullYear()} Vít Rozsíval | All rights reserved.
        </Typography>
      </Box>
    </Container>
  </footer>
);
