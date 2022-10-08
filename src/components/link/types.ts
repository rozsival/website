import type { ReactElement } from 'react';

import type { VARIANT_BUTTON, VARIANT_DEFAULT } from './constants';

export type LinkVariant = typeof VARIANT_DEFAULT | typeof VARIANT_BUTTON;

export type LinkProps = {
  blank?: boolean;
  href: string;
  icon?: ReactElement;
  label: string;
  variant?: LinkVariant;
};

export type EmailProps = Pick<LinkProps, 'variant'> & {
  label?: string;
  to: string;
};
