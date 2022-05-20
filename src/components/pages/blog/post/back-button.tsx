import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Box } from '@mui/material';

import { pageRoutes } from '../../../../routes';
import { Link, VARIANT_BUTTON } from '../../../link';

import { backButtonStyle } from './styles';

export const BackButton = () => (
  <Box sx={backButtonStyle}>
    <Link
      href={pageRoutes.blog.index}
      icon={<ArrowBackIcon />}
      label="Back to posts"
      variant={VARIANT_BUTTON}
    />
  </Box>
);
