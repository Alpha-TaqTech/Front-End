import styled from 'styled-components';
import {
  BorderRadius,
  Color,
  FontFamily,
  FontSizeDesktop,
  FontSizeMobile,
} from '../constants';

interface TextFieldProps {
  width?: number;
}

interface TextAreaProps extends TextFieldProps {
  height: number;
}

export const TextField = styled.input<TextFieldProps>`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSizeDesktop.Medium};
  border: 1px solid ${Color.Black};
  border-radius: ${BorderRadius.Medium};
  background: ${Color.White};
  height: 30px;
  width: ${({ width }) => width ?? 240}px;
  outline: none;
`;

export const TextArea = styled.textarea<TextAreaProps>`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSizeDesktop.Medium};
  border: 1px solid ${Color.Black};
  border-radius: ${BorderRadius.Medium};
  background: ${Color.White};
  width: ${({ width }) => width ?? 240}px;
  height: ${({height}) => height ?? 90}px;
  resize: none;
  outline: none;
`;

export const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
