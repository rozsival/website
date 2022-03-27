import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  Variants,
} from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { LayoutProps } from './types';

const onAnimatePresence = () => window.scrollTo(0, 0);
const style = { height: '100%', width: '100%' };
const transition = { duration: 0.3 };
const variants: Variants = {
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  initial: { opacity: 0 },
};

export const Transition = ({ children }: LayoutProps): ReactElement => {
  const router = useRouter();
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={onAnimatePresence}
      >
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
