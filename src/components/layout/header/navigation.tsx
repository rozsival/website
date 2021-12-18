import { Box, Divider, Stack } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import { ReactElement } from 'react';

import { Link } from '../../link';
import { pagesRoutes } from '../../../routes';

import { ColorModeToggle } from './color-mode-toggle';

const divider = <Divider flexItem orientation="vertical" />;

export const Navigation = (): ReactElement => (
  <nav>
    <Box alignItems="center" display="flex" justifyContent="space-between">
      <Stack direction="row" divider={divider} spacing={2}>
        <Link href={pagesRoutes.home} icon={<HomeIcon />} label="Home" />
        <Link href={pagesRoutes.blog.index} label="Blog" />
      </Stack>
      <ColorModeToggle />
    </Box>
  </nav>
);
