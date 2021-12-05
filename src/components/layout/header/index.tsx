import { Container } from '@mui/material';
import { ReactElement } from 'react';

import { MAX_WIDTH } from '../constants';

export const Header = (): ReactElement => (
  <Container maxWidth={MAX_WIDTH}>Header</Container>
);
