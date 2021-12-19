import { styled } from '@mui/material/styles';

import { HEADER_SPACING } from './constants';

export const StyledHeader = styled('header')(({ theme }) => ({
  paddingTop: theme.spacing(HEADER_SPACING),
}));
