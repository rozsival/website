import { IconButton, Tooltip } from '@mui/material';
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
} from '@mui/icons-material';
import { ReactElement } from 'react';

import { useColorModeContext } from '../../../context';

export const ColorModeToggle = (): ReactElement => {
  const { isDarkMode, toggleColorMode } = useColorModeContext();
  return (
    <Tooltip
      title={isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <IconButton onClick={toggleColorMode} color="inherit">
        {isDarkMode() ? <LightIcon /> : <DarkIcon />}
      </IconButton>
    </Tooltip>
  );
};
