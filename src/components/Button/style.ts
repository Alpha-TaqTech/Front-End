import styled from 'styled-components';
import { Color } from '../common/constants';

interface ButtonTypes {
  color: string;
}

export const ButtonStyle = styled.button<ButtonTypes>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  color: ${Color.White};
  border: solid rgba(0, 0, 0, 0.1) 2px;
  border-radius: 8px;
  height: 40px;
  padding: 0 18px;
  gap: 4px;
`;
