import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | Blog | Vít Rozsíval',
    default: 'Blog',
  },
};

export default function BlogLayout({ children }: PropsWithChildren) {
  return children;
}
