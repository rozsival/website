import { styled } from '@mui/material/styles';
import { ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { CodeProps } from './types';

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  &,
  > code {
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
    font-family: ${(props) => props.theme.typography.fontFamily};
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
