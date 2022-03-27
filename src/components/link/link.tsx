import { Button, Link as MUILink, Typography } from '@mui/material';
import NextLink from 'next/link';
import { VFC } from 'react';

import { buttonStyle } from './styles';
import { LinkProps } from './types';

export const Link: VFC<LinkProps> = ({
  asButton,
  blank,
  href,
  icon,
  label,
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
      {asButton ? (
        <Button
          component="a"
          sx={buttonStyle}
          target={target}
          variant="outlined"
        >
          {content}
        </Button>
      ) : (
        <MUILink alignItems="center" display="inline-flex" target={target}>
          {content}
        </MUILink>
      )}
    </NextLink>
  );
};
