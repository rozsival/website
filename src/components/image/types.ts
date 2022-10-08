import type { ImageProps as NextImageProps, StaticImageData } from 'next/image';

export type ImageProps = Pick<
  NextImageProps,
  'alt' | 'height' | 'layout' | 'width'
> & {
  src: StaticImageData;
};
