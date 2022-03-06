import { Typography } from '@mui/material';
import { ReactElement } from 'react';

import { HEADING_H1, HEADING_H2, HEADING_H3 } from './constants';
import { HeadingProps, HeadingVariant, HeadingVariantProps } from './types';

const Heading = ({ children, variant }: HeadingProps): ReactElement => (
  <Typography variant={variant}>{children}</Typography>
);

const makeHeadingVariant = (variant: HeadingVariant) => {
  const HeadingVariant = ({ children }: HeadingVariantProps) => (
    <Heading variant={variant}>{children}</Heading>
  );
  HeadingVariant.displayName = variant.toUpperCase();
  return HeadingVariant;
};

export const H1 = makeHeadingVariant(HEADING_H1);
export const H2 = makeHeadingVariant(HEADING_H2);
export const H3 = makeHeadingVariant(HEADING_H3);
