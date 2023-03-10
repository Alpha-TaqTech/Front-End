import { Color } from '../../components/common/constants';
import { House } from '@phosphor-icons/react';
import { Button } from '../../components/Button/index';
import { BodyText, H1 } from '../../components/common/typography/typography-components.component';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Logo } from '../../assets/icons/logo';

export const Home = () => {
  console.log('Width: ', window.screen.availWidth, 'Height: ', window.innerHeight);
  
  return (
    <>
      <Container width='90vw' height='60vh' gap='12px'>
        <Logo width='95px' height='108px'/>
        <H1 light>Chat RPG</H1>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <Container width='80%' height='10%' direction='row' gap='12px' backgroundColor='transparent'>
          <Button label='Login' color={Color.Green} />
          <Button label='Register' color={Color.Gold} />
        </Container>
      </Container>
    </>
  );
};
