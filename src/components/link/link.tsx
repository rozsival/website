import { Button, Link as MUILink, Typography } from '@mui/material';
import NextLink from 'next/link';
import { ReactElement, VFC } from 'react';

import { VARIANT_BUTTON, VARIANT_DEFAULT } from './constants';
import { buttonStyle } from './styles';
import { LinkProps, LinkVariant } from './types';

const render = (
  content: ReactElement,
  target: string,
  variant: LinkVariant,
) => {
  switch (variant) {
    case VARIANT_BUTTON:
      return (
        <Button
          component="a"
          sx={buttonStyle}
          target={target}
          variant="outlined"
        >
          {content}
        </Button>
      );
    default:
      return (
        <MUILink alignItems="center" display="inline-flex" target={target}>
          {content}
        </MUILink>
      );
  }
};

export const Link: VFC<LinkProps> = ({
  blank,
  href,
  icon,
  label,
  variant = VARIANT_DEFAULT,
}) => {
  const target = blank ? '_blank' : '_self';
  const content = (
    <>
      {icon}
      <Typography component="span" ml={icon ? 1 : 0}>
        {label}
      </Typography>
    </>
  );
  return (
    <NextLink href={href} passHref>
      {render(content, target, variant)}
    </NextLink>
  );
};
