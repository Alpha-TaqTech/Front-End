import styled from 'styled-components';
import { BorderRadius, Color, FontFamily } from '../constants';

export const TextField = styled.input`
  font-family: ${FontFamily.Primary};
  border: 1px solid ${Color.Black};
  border-radius: ${BorderRadius.Medium};
  background: ${Color.White};
`;
