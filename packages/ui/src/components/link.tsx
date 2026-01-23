import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { type AnchorHTMLAttributes, type Ref } from 'react';

import { cn } from '../lib/utils.js';

const linkVariants = cva('transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', {
  variants: {
    variant: {
      default: 'text-primary underline-offset-4 hover:underline',
      muted: 'text-muted-foreground hover:text-foreground',
      nav: 'text-foreground/60 hover:text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants> & {
    asChild?: boolean;
    ref?: Ref<HTMLAnchorElement>;
  };

function Link({ className, variant, asChild = false, ref, ...props }: LinkProps) {
  const Comp = asChild ? Slot : 'a';
  return <Comp ref={ref} className={cn(linkVariants({ variant, className }))} {...props} />;
}

export { Link, linkVariants, type LinkProps };
