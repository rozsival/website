import React, { ReactElement } from 'react';
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  Variants,
} from 'framer-motion';
import { useRouter } from 'next/router';

import { LayoutProps } from './types';

export const style = { height: '100%', width: '100%' };

export const transition = { duration: 0.3 };

export const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const Transition = ({ children }: LayoutProps): ReactElement => {
  const router = useRouter();
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence exitBeforeEnter>
        <m.div
          key={router.route}
          animate="animate"
          exit="exit"
          initial="initial"
          style={style}
          transition={transition}
          variants={variants}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
};
