import { SxProps, Theme } from '@mui/system';

export const alert: SxProps<Theme> = {
  margin: '1em auto 0 auto',
  pointerEvents: 'all',
  width: (theme) => (theme.breakpoints.up('md') ? '50%' : '90%'),
};

export const collapse: SxProps<Theme> = {
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  width: '100%',
};
