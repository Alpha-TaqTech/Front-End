import styled from 'styled-components';

interface RoundedImageProps {
  background: string;
  size: number;
}

export const RoundedImage = styled.div<RoundedImageProps>`
  border-radius: 50%;
  background: ${({ background }) => background};
  background-size: contain;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
