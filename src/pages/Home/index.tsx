import { Color } from '../../components/common/constants';
import { House } from '@phosphor-icons/react';
import { Button } from '../../components/Button/index';
import {
  BodyText,
  H1,
} from '../../components/common/typography/typography-components.component';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Logo } from '../../assets/icons/logo';
import { useNavigate } from 'react-router-dom';
import { encodeURL } from '../../helpers/URLNavigationReplace';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container width="90vw" height="60vh" gap="12px">
        <Logo width="95px" height="108px" />
        <H1 light>Chat RPG</H1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        
          <Button label="Login" color={Color.Green} />
          <Button
            label="Register"
            color={Color.Gold}
            onClick={() => navigate(encodeURL(['register']))}
          />
        </Container>
    </>
  );
};
