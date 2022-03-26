import { Box, Divider, Stack } from '@mui/material';
import { Article as BlogIcon, Home as HomeIcon } from '@mui/icons-material';
import { ReactElement } from 'react';

import { Link, LinkProps } from '../../link';
import { pageRoutes } from '../../../routes';

import { ColorModeToggle } from './color-mode-toggle';
import { HEADER_SPACING } from './constants';

const divider = <Divider flexItem orientation="vertical" />;

const links: LinkProps[] = [
  { href: pageRoutes.home, icon: <HomeIcon />, label: 'Home' },
  { href: pageRoutes.blog.index, icon: <BlogIcon />, label: 'Blog' },
];

const renderLink = ({ href, icon, label }: LinkProps) => (
  <Link key={href} asButton href={href} icon={icon} label={label} />
);

export const Navigation = (): ReactElement => (
  <nav>
    <Box
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      mt={HEADER_SPACING}
    >
      <Stack direction="row" divider={divider} spacing={HEADER_SPACING}>
        {links.map(renderLink)}
      </Stack>
      <ColorModeToggle />
    </Box>
  </nav>
);
