import styled from 'styled-components';
import { Color } from '../constants';

interface RoundedImageProps {
  background: string;
  size: number;
  border?: boolean;
}

export const RoundedImage = styled.div<RoundedImageProps>`
  border-radius: 50%;
  border:  ${({border}) => border && '1px solid ' + Color.Black.base };
  background: ${({ background }) => background};
  background-size: contain;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
