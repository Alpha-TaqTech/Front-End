import { Label } from '../typography';
import { TextField, TextInputWrapper } from './inputs-components.styled';

interface TextInputProps {
  type?: 'text' | 'password' | 'email';
  label: string;
}

export const TextInput = ({ type, label }: TextInputProps) => {
  return (
    <TextInputWrapper>
      <Label>{label}</Label>
      <TextField type={type} />
    </TextInputWrapper>
  );
};
