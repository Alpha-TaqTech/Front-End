import { ColorType } from '../common/constants';
import { Label } from '../common/typography';
import { ButtonStyle } from './style';

interface PropTypes {
  label?: string;
  onClick?: () => void;
  color: ColorType;
  icon?: JSX.Element | string;
}

export const Button = ({ label, onClick, color, icon }: PropTypes) => {
  return (
    <ButtonStyle
      baseColor={color.base}
      hoverColor={color.hover}
      value={'Label'}
    >
      {icon}
      {label && (
        <Label light medium>
          {label}
        </Label>
      )}
    </ButtonStyle>
  );
};
