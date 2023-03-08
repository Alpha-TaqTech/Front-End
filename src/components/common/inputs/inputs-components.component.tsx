import { Label } from '../typography';

interface TextInputProps {
  type?: 'text' | 'password' | 'email';
  label: string;
}

export const TextInput = ({ type, label }: TextInputProps) => {
  <>
    <Label>{label}</Label>
  </>
};
