import { Box, Container, Typography } from '@mui/material';
import { ReactElement } from 'react';

import { SEO_AUTHOR } from '../../../constants';

const date = new Date();

export const Footer = (): ReactElement => (
  <footer>
    <Container>
      <Box py={4} textAlign="center">
        <Typography>
          &copy; {date.getFullYear()} {SEO_AUTHOR} | All rights reserved.
        </Typography>
      </Box>
    </Container>
  </footer>
);
