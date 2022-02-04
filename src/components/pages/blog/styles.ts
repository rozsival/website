import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export const boxStyle: SxProps<Theme> = {
  alignItems: 'center',
  display: 'flex',
  flexFlow: {
    xs: 'column wrap',
    md: 'row wrap',
  },
  justifyContent: {
    xs: 'center',
    md: 'space-around',
  },
  width: '100%',
};
