import { Typography } from '@mui/material';
import { ReactElement } from 'react';

import { HEADING_H1, HEADING_H2, HEADING_H3, HEADING_H4 } from './constants';
import { HeadingProps, HeadingVariant, HeadingVariantProps } from './types';

const Heading = ({
  children,
  color,
  component,
  sx,
  variant,
}: HeadingProps): ReactElement => (
  <Typography
    color={color}
    component={component ?? variant}
    sx={sx}
    variant={variant}
  >
    {children}
  </Typography>
);

const makeHeadingVariant = (variant: HeadingVariant) => {
  const HeadingVariant = ({
    color,
    component,
    children,
    sx,
  }: HeadingVariantProps) => (
    <Heading color={color} component={component} sx={sx} variant={variant}>
      {children}
    </Heading>
  );
  HeadingVariant.displayName = variant.toUpperCase();
  return HeadingVariant;
};

export const H1 = makeHeadingVariant(HEADING_H1);
export const H2 = makeHeadingVariant(HEADING_H2);
export const H3 = makeHeadingVariant(HEADING_H3);
export const H4 = makeHeadingVariant(HEADING_H4);
