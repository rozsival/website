import { styled } from '@mui/material/styles';
import type { ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import type { CodeProps } from './types';

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  &,
  > code {
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
`;

export const Code = ({
  children,
  language = 'typescript',
}: CodeProps): ReactElement => (
  <StyledSyntaxHighlighter
    language={language}
    showLineNumbers
    style={atelierCaveDark}
  >
    {children}
  </StyledSyntaxHighlighter>
);
