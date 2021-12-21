import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { CodeProps } from './types';

export const Code = ({ children, language, ...props }: CodeProps) => {
  if (language) {
    return (
      <SyntaxHighlighter
        language={language}
        showLineNumbers
        style={atelierDuneDark}
      >
        {children}
      </SyntaxHighlighter>
    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <code {...props}>{children}</code>;
};
