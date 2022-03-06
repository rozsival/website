import NextImage from 'next/image';
import { ReactElement } from 'react';

import { ImageProps } from './types';

export const Image = ({
  alt,
  height,
  src,
  width,
}: ImageProps): ReactElement => (
  <NextImage
    alt={alt}
    blurDataURL={src.blurDataURL}
    height={height ?? width}
    placeholder="blur"
    src={src}
    width={width}
  />
);
