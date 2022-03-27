import { FONT, FONT_API, FONT_WEIGHTS } from './constants';

const family = FONT.replace(' ', '+');
const weights = FONT_WEIGHTS.join(',');
const href = `${FONT_API}?family=${family}:${weights}&display=swap`;

export const font = (
  // eslint-disable-next-line @next/next/no-page-custom-font
  <link href={href} rel="stylesheet" />
);
