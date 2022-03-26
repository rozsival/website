import { styled } from '@mui/material/styles';
import { ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atelierCaveDark,
  atelierCaveLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { useColorModeContext } from '../../context';

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
}: CodeProps): ReactElement => {
  const { onMode } = useColorModeContext();
  return (
    <StyledSyntaxHighlighter
      language={language}
      showLineNumbers
      style={onMode(atelierCaveDark, atelierCaveLight)}
    >
      {children}
    </StyledSyntaxHighlighter>
  );
};
