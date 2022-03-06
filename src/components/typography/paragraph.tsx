import { Typography } from '@mui/material';
import { ReactElement } from 'react';

import { ParagraphProps } from './types';

export const Paragraph = ({ children }: ParagraphProps): ReactElement => (
  <Typography variant="body1">{children}</Typography>
);
