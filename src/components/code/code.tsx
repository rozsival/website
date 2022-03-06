import { ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atelierDuneDark,
  atelierDuneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { useColorModeContext } from '../../context';

import { CodeProps } from './types';

export const Code = ({
  children,
  language = 'typescript',
}: CodeProps): ReactElement => {
  const { onMode } = useColorModeContext();
  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers
      style={onMode(atelierDuneDark, atelierDuneLight)}
    >
      {children}
    </SyntaxHighlighter>
  );
};
