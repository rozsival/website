import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atelierDuneDark,
  atelierDuneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { useColorModeContext } from '../../../../context';

import { CodeProps } from './types';

export const Code = ({ children, language = 'typescript' }: CodeProps) => {
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
