import { ReactElement } from 'react';

export type LinkProps = {
  asButton?: boolean;
  blank?: boolean;
  href: string;
  icon?: ReactElement;
  isEmail?: boolean;
  label: string;
};
