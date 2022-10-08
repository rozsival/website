import { Typography } from '@mui/material';
import type { ReactElement } from 'react';

import type { ParagraphProps } from './types';

export const Paragraph = ({ children }: ParagraphProps): ReactElement => (
  <Typography variant="body1">{children}</Typography>
);
