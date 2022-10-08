import { Email as EmailIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import { Link } from './link';
import type { EmailProps } from './types';

const Container = styled('span', {
  shouldForwardProp: (propertyName) => propertyName !== 'interaction',
})<{ interaction: boolean }>`
  span.MuiBox-root {
    unicode-bidi: bidi-override;
    direction: ${({ interaction }) => (interaction ? 'ltr' : 'rtl')};
  }
`;

const mail = (to: string) => `mailto:${to}`;
const revert = (string: string) => [...string].reverse().join('').trim();

export const Email = ({ to, variant, label = to }: EmailProps) => {
  const [interaction, setInteraction] = useState(false);
  const onInteraction = () => setInteraction(true);
  return (
    <Container
      interaction={interaction}
      onContextMenu={onInteraction}
      onFocus={onInteraction}
      onMouseOver={onInteraction}
    >
      <Link
        blank
        href={interaction ? mail(to) : mail(revert(to))}
        icon={<EmailIcon />}
        label={interaction ? label : revert(label)}
        variant={variant}
      />
    </Container>
  );
};
