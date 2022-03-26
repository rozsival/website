import { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = Pick<
  NextImageProps,
  'alt' | 'height' | 'layout' | 'width'
> & {
  src: StaticImageData;
};
