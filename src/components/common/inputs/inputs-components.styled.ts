import styled from 'styled-components';
import {
  BorderRadius,
  Color,
  FontFamily,
  FontSizeDesktop,
  FontSizeMobile,
} from '../constants';

export const TextField = styled.input`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSizeDesktop.Medium};
  border: 1px solid ${Color.Black};
  border-radius: ${BorderRadius.Medium};
  background: ${Color.White};
  height: 30px;
  width: 240px;
  outline: none;
`;

export const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
