import { styled } from '@mui/material/styles';
import NextImage from 'next/image';
import { ReactElement } from 'react';

import { ImageProps } from './types';

const StyledImage = styled(NextImage)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;

export const Image = (props: ImageProps): ReactElement => {
  const { alt, height: customHeight, layout, src, width: customWidth } = props;
  const { blurDataURL, height: imageHeight, width: imageWidth } = src;
  return (
    <StyledImage
      alt={alt}
      blurDataURL={blurDataURL}
      height={customHeight ?? imageHeight}
      layout={layout ?? 'responsive'}
      placeholder="blur"
      src={src}
      width={customWidth ?? imageWidth}
    />
  );
};
