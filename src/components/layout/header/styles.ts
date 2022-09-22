import { styled, Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

import { DRAWER_SPACING, DRAWER_WIDTH, HEADER_SPACING } from './constants';

export const DrawerHeader = styled('div')(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(HEADER_SPACING, 0),
}));

export const drawerCloseButtonStyle: SxProps<Theme> = {
  marginRight: -1,
};

export const drawerStyle: SxProps<Theme> = {
  display: { md: 'none' },
  flexShrink: 0,
  width: DRAWER_WIDTH,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    padding: (theme) =>
      theme.spacing(0, HEADER_SPACING, DRAWER_SPACING, HEADER_SPACING),
  },
};

export const menuIconStyle: SxProps<Theme> = {
  display: { xs: 'block', md: 'none' },
  marginLeft: -1,
};

export const stackStyle = (mobile: boolean): SxProps<Theme> => ({
  display: { xs: mobile ? 'flex' : 'none', md: mobile ? 'none' : 'flex' },
});
