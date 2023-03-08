import { Color } from '../../components/common/constants';
import { House } from '@phosphor-icons/react';
import { Button } from '../../components/Button/index';
import { BodyText } from '../../components/common/typography/typography-components.component';

export const Home = () => (
  <>
    <BodyText>Button Component</BodyText>
    <br />
    <div>
      <BodyText>Button with only icon</BodyText>
    </div>
    <Button color="green" icon={<House size={18} color={Color.White} />} />
    <br />
    <div>
      <BodyText>Button with only label</BodyText>
    </div>
    <Button color={Color.Gold} label="Label" />
    <br />
    <div>
      <BodyText>Button with label and icon</BodyText>
    </div>
    <Button
      color={Color.Red}
      label="Home"
      icon={<House size={18} color={Color.White} />}
    />
  </>
);
