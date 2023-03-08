import { Label } from '../common/typography';
import { ButtonStyle } from './style';

export interface ColorType {
  base: string;
  hover: string;
}
interface PropTypes {
  label?: string;
  onClick?: () => void;
  color: ColorType;
  icon?: JSX.Element | string;
}

export const Button = ({ label, onClick, color, icon }: PropTypes) => {
  return (
    <ButtonStyle color={color} value={'Label'}>
      {icon}
      {label && (
        <Label light medium>
          {label}
        </Label>
      )}
    </ButtonStyle>
  );
};
