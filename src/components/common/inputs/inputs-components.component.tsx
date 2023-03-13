import { useRef, RefObject } from 'react';
import { Label } from '../typography';
import {
  TextField,
  TextInputWrapper,
  TextArea,
  TextAreaProps,
  SelectStyled,
  SelectIconStyled,
  SelectWrapper,
} from './inputs-components.styled';

interface TextInputProps {
  type?: 'text' | 'password' | 'email';
  label: string;
}

interface TextAreaInputProps extends TextAreaProps {
  label: string;
}

interface SelectInputProps {
  options: { name: string }[];
}

export const TextInput = ({ type, label }: TextInputProps) => {
  return (
    <TextInputWrapper>
      <Label>{label}</Label>
      <TextField type={type} />
    </TextInputWrapper>
  );
};

export const TextAreaInput = ({ label, height, width }: TextAreaInputProps) => {
  return (
    <TextInputWrapper>
      <Label>{label}</Label>
      <TextArea height={height} width={width} />
    </TextInputWrapper>
  );
};

export const SelectInput = ({ options }: SelectInputProps) => {

  return (
    <SelectWrapper>
      <SelectStyled>
        {options.map((element, index) => {
          return (
            <option key={index} value={element.name}>
              {element.name}
            </option>
          );
        })}
      </SelectStyled>
      <SelectIconStyled />
    </SelectWrapper>
  );
};
