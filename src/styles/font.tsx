import { FONT, FONT_API, FONT_WEIGHTS } from './constants';

const family = FONT.replace(' ', '+');
const weights = FONT_WEIGHTS.join(',');
const href = `${FONT_API}?family=${family}:${weights}&display=swap`;

export const font = <link href={href} rel="stylesheet" />;
