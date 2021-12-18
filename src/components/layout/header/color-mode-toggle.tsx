import { IconButton } from '@mui/material';
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
} from '@mui/icons-material';
import { ReactElement } from 'react';

import { useColorModeContext } from '../../../context';

export const ColorModeToggle = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorModeContext();
  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      {colorMode === 'dark' ? <DarkIcon /> : <LightIcon />}
    </IconButton>
  );
};
