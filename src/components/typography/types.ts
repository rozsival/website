import type { Theme } from '@mui/material/styles';
import type { SxProps, SystemProps } from '@mui/system';
import type { ElementType, ReactNode } from 'react';

import type {
  HEADING_H1,
  HEADING_H2,
  HEADING_H3,
  HEADING_H4,
} from './constants';

type TypographyProps = {
  color?: SystemProps<Theme>['color'];
  component?: ElementType;
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export type HeadingVariant =
  | typeof HEADING_H1
  | typeof HEADING_H2
  | typeof HEADING_H3
  | typeof HEADING_H4;

export type HeadingProps = TypographyProps & {
  variant: HeadingVariant;
};

export type HeadingVariantProps = Omit<HeadingProps, 'variant'>;

export type ParagraphProps = TypographyProps;
