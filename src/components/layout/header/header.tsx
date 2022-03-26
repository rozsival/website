import { Container } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { ReactElement } from 'react';

import { SEO_AUTHOR, SEO_JOB_TITLE } from '../../../constants';
import { H2, H4 } from '../../typography';

import {
  HEADER_GRADIENT_ALPHA_DARK,
  HEADER_GRADIENT_ALPHA_LIGHT,
  HEADER_SPACING,
} from './constants';
import { Navigation } from './navigation';

const StyledHeader = styled('header')(
  ({
    theme: {
      palette: { background, mode, primary },
      spacing,
    },
  }) => ({
    background: `linear-gradient(180deg, ${alpha(
      primary.main,
      mode === 'light'
        ? HEADER_GRADIENT_ALPHA_LIGHT
        : HEADER_GRADIENT_ALPHA_DARK,
    )}, ${background.default})`,
    padding: spacing(HEADER_SPACING, 0, HEADER_SPACING, 0),
  }),
);

export const Header = (): ReactElement => (
  <StyledHeader>
    <Container>
      <H2 color="primary" component="h1">
        {SEO_AUTHOR}
      </H2>
      <H4 component="h2">{SEO_JOB_TITLE}</H4>
      <Navigation />
    </Container>
  </StyledHeader>
);
