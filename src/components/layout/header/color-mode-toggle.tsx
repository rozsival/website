import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { ReactElement } from 'react';

import { useColorModeContext } from '../../../context';

const buttonStyle: SxProps<Theme> = {
  marginRight: -1,
};

export const ColorModeToggle = (): ReactElement => {
  const { onMode, toggleColorMode } = useColorModeContext();
  return (
    <Tooltip title={onMode('Switch to light mode', 'Switch to dark mode')}>
      <IconButton color="inherit" onClick={toggleColorMode} sx={buttonStyle}>
        {onMode(<LightIcon />, <DarkIcon />)}
      </IconButton>
    </Tooltip>
  );
};
