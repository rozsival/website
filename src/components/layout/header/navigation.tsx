import {
  Article as BlogIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import {
  Box,
  Divider,
  IconButton,
  Stack,
  SwipeableDrawer,
} from '@mui/material';
import { useRouter } from 'next/router';
import { KeyboardEvent, ReactElement, useState } from 'react';

import { pageRoutes } from '../../../routes';
import { Link, LinkProps } from '../../link';

import { ColorModeToggle } from './color-mode-toggle';
import { HEADER_SPACING } from './constants';
import {
  drawerCloseButtonStyle,
  DrawerHeader,
  drawerStyle,
  menuIconStyle,
  stackStyle,
} from './styles';

const links: LinkProps[] = [
  { href: pageRoutes.home, icon: <HomeIcon />, label: 'Home' },
  { href: pageRoutes.blog.index, icon: <BlogIcon />, label: 'Blog' },
];

const renderDivider = (mobile: boolean) => (
  <Divider flexItem orientation={mobile ? 'horizontal' : 'vertical'} />
);

const renderLink = ({ href, icon, label }: LinkProps) => (
  <Link key={href} asButton href={href} icon={icon} label={label} />
);

const renderStack = (mobile = true) => (
  <Stack
    direction={mobile ? 'column' : 'row'}
    divider={renderDivider(mobile)}
    spacing={HEADER_SPACING}
    sx={stackStyle(mobile)}
  >
    {links.map(renderLink)}
  </Stack>
);

export const Navigation = (): ReactElement => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);
  const openDrawer = () => setDrawerOpen(true);
  const toggleDrawer = (event: KeyboardEvent) => {
    const { key, type } = event ?? {};
    if (type === 'keydown' && ['Shift', 'Tab'].includes(key)) {
      return;
    }
    return drawerOpen ? closeDrawer() : openDrawer();
  };
  const router = useRouter();
  router.events.on('routeChangeComplete', closeDrawer);
  return (
    <nav>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        mt={HEADER_SPACING}
      >
        <SwipeableDrawer
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          open={drawerOpen}
          sx={drawerStyle}
        >
          <DrawerHeader>
            <IconButton
              aria-label="Close menu"
              color="inherit"
              onClick={closeDrawer}
              sx={drawerCloseButtonStyle}
            >
              <CloseIcon />
            </IconButton>
          </DrawerHeader>
          {renderStack()}
        </SwipeableDrawer>
        {renderStack(false)}
        <IconButton
          aria-label="Open menu"
          color="inherit"
          onClick={openDrawer}
          sx={menuIconStyle}
        >
          <MenuIcon />
        </IconButton>
        <ColorModeToggle />
      </Box>
    </nav>
  );
};
