// Custom MDX components for rich blog content
// These components override default HTML elements in MDX

import type { ComponentPropsWithoutRef } from 'react';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type PreProps = ComponentPropsWithoutRef<'pre'>;
type CodeProps = ComponentPropsWithoutRef<'code'>;

// Heading components with anchor links
function H1({ children, id, ...props }: HeadingProps) {
  return (
    <h1 id={id} className="scroll-m-20 text-4xl font-bold tracking-tight" {...props}>
      {children}
    </h1>
  );
}

function H2({ children, id, ...props }: HeadingProps) {
  return (
    <h2
      id={id}
      className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    >
      {children}
    </h2>
  );
}

function H3({ children, id, ...props }: HeadingProps) {
  return (
    <h3 id={id} className="scroll-m-20 text-2xl font-semibold tracking-tight" {...props}>
      {children}
    </h3>
  );
}

function P({ children, ...props }: ParagraphProps) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  );
}

function A({ children, href, ...props }: AnchorProps) {
  const isExternal = typeof href === 'string' && href.startsWith('http');
  return (
    <a
      href={href}
      className="font-medium text-primary underline underline-offset-4"
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
    </a>
  );
}

function Pre({ children, ...props }: PreProps) {
  return (
    <pre
      className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4"
      {...props}
    >
      {children}
    </pre>
  );
}

function Code({ children, ...props }: CodeProps) {
  return (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
      {...props}
    >
      {children}
    </code>
  );
}

function Blockquote({ children, ...props }: ComponentPropsWithoutRef<'blockquote'>) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...props}>
      {children}
    </blockquote>
  );
}

function Ul({ children, ...props }: ComponentPropsWithoutRef<'ul'>) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  );
}

function Ol({ children, ...props }: ComponentPropsWithoutRef<'ol'>) {
  return (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
      {children}
    </ol>
  );
}

// Export all MDX components as a single object for easy spreading
export const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  a: A,
  pre: Pre,
  code: Code,
  blockquote: Blockquote,
  ul: Ul,
  ol: Ol,
};

export { H1, H2, H3, P, A, Pre, Code, Blockquote, Ul, Ol };
