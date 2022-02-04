import { Box, Container, Typography } from '@mui/material';
import { ReactElement } from 'react';

import { SEO_AUTHOR } from '../../../constants';

const date = new Date();

export const Footer = (): ReactElement => (
  <footer>
    <Container>
      <Box textAlign="center" py={4}>
        <Typography>
          &copy; {date.getFullYear()} {SEO_AUTHOR} | All rights reserved.
        </Typography>
      </Box>
    </Container>
  </footer>
);
