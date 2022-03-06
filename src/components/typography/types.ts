import { ReactNode } from 'react';

import { HEADING_H1, HEADING_H2, HEADING_H3 } from './constants';

type TypographyProps = {
  children?: ReactNode;
};

export type HeadingVariant =
  | typeof HEADING_H1
  | typeof HEADING_H2
  | typeof HEADING_H3;

export type HeadingProps = TypographyProps & {
  variant: HeadingVariant;
};

export type HeadingVariantProps = Omit<HeadingProps, 'variant'>;

export type ParagraphProps = TypographyProps;
