import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atelierDuneDark,
  atelierDuneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { useColorModeContext } from '../../../../context';

import { CodeProps } from './types';

export const Code = ({ children, language, ...props }: CodeProps) => {
  const { onMode } = useColorModeContext();
  if (language) {
    return (
      <SyntaxHighlighter
        language={language}
        showLineNumbers
        style={onMode(atelierDuneDark, atelierDuneLight)}
      >
        {children}
      </SyntaxHighlighter>
    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <code {...props}>{children}</code>;
};
