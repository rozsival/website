import { IconButton, Tooltip } from '@mui/material';
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
} from '@mui/icons-material';
import { ReactElement } from 'react';

import { useColorModeContext } from '../../../context';

export const ColorModeToggle = (): ReactElement => {
  const { onMode, toggleColorMode } = useColorModeContext();
  return (
    <Tooltip title={onMode('Switch to light mode', 'Switch to dark mode')}>
      <IconButton onClick={toggleColorMode} color="inherit">
        {onMode(<LightIcon />, <DarkIcon />)}
      </IconButton>
    </Tooltip>
  );
};
