import NextLink from 'next/link';
import { Link as MUILink, Typography } from '@mui/material';
import { VFC } from 'react';

import { LinkProps } from './types';

export const Link: VFC<LinkProps> = ({ href, icon, label }) => (
  <NextLink href={href} passHref>
    <MUILink alignItems="center" display="inline-flex">
      {icon}
      <Typography ml={icon ? 1 : 0}>{label}</Typography>
    </MUILink>
  </NextLink>
);
