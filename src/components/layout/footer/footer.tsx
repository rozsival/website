import { Box, Container, Typography } from '@mui/material';
import { ReactElement } from 'react';

import { SEO_AUTHOR } from '../../../constants';

const EST = 2022;
const date = new Date();

const renderDate = () => {
  const current = date.getFullYear();
  if (current === EST) return current;
  return `${EST}–${current}`;
};

export const Footer = (): ReactElement => (
  <footer>
    <Container>
      <Box py={4} textAlign="center">
        <Typography>
          &copy; {renderDate()} {SEO_AUTHOR} | All rights reserved.
        </Typography>
      </Box>
    </Container>
  </footer>
);
