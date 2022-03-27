import dynamic from 'next/dynamic';

export const LazyTopProgressBar = dynamic<Record<never, never>>(
  () => import('./top-progress-bar').then((module) => module.TopProgressBar),
  { ssr: false },
);
