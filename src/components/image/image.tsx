import NextImage from 'next/image';
import { ReactElement } from 'react';

import { ImageProps } from './types';

export const Image = (props: ImageProps): ReactElement => {
  const { alt, height: customHeight, src, width: customWidth } = props;
  const { blurDataURL, height: imageHeight, width: imageWidth } = src;
  return (
    <NextImage
      alt={alt}
      blurDataURL={blurDataURL}
      height={customHeight ?? imageHeight}
      placeholder="blur"
      src={src}
      width={customWidth ?? imageWidth}
    />
  );
};
