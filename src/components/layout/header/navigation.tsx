import { Box, Divider, Stack } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import { ReactElement } from 'react';

import { Link } from '../../link/link';
import { pageRoutes } from '../../../routes';

import { ColorModeToggle } from './color-mode-toggle';

const divider = <Divider flexItem orientation="vertical" />;

export const Navigation = (): ReactElement => (
  <nav>
    <Box alignItems="center" display="flex" justifyContent="space-between">
      <Stack direction="row" divider={divider} spacing={2}>
        <Link href={pageRoutes.home} icon={<HomeIcon />} label="Home" />
        <Link href={pageRoutes.blog.index} label="Blog" />
      </Stack>
      <ColorModeToggle />
    </Box>
  </nav>
);
