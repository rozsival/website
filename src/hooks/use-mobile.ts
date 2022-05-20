import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const useMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const onMobile = <Mobile, Desktop>(mobile: Mobile, desktop: Desktop) =>
    isMobile ? mobile : desktop;
  return { isMobile, onMobile };
};
