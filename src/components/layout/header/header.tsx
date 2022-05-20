import { Container } from '@mui/material';
import { alpha, styled, Theme } from '@mui/material/styles';
import { ReactElement } from 'react';

import { SEO_AUTHOR, SEO_JOB_TITLE } from '../../../constants';
import { H2, H4 } from '../../typography';

import { HEADER_SPACING } from './constants';
import { Navigation } from './navigation';

const GRADIENT_ALPHA = 0.05;
const makeBackground = ({ palette }: Theme) => {
  const color = alpha(palette.common.white, GRADIENT_ALPHA);
  return `linear-gradient(${color}, ${color})`;
};

const StyledHeader = styled('header')(({ theme }) => ({
  background: makeBackground(theme),
  padding: theme.spacing(HEADER_SPACING, 0, 0, 0),
  [theme.breakpoints.up('sm')]: {
    paddingBottom: theme.spacing(HEADER_SPACING + 1),
  },
}));

export const Header = (): ReactElement => (
  <StyledHeader>
    <Container>
      <H2 color="primary" component="h1">
        {SEO_AUTHOR}
      </H2>
      <H4 component="h2">└{`{${SEO_JOB_TITLE}}`}</H4>
      <Navigation />
    </Container>
  </StyledHeader>
);
