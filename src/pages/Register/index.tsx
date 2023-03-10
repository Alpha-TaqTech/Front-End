import { useNavigate } from 'react-router-dom';

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
import { encodeURL } from '../../helpers/URLNavigationReplace';
import { useEffect, useState } from 'react';

interface UserTypes {
  email: string;
  password: string;
  contact: {
    userName: string;
    firstName?: string;
    lastName?: string;
    profilePhoto?: string;
  };
}

interface PropTypes {
  user: UserTypes | null;
}


export const Register = () => {
  const navigate = useNavigate();


  return (
    <>
      <Container width="90vw" height="60vh" gap="12px">
        <Logo width="95px" height="108px" />
        <H1 light>Chat RPG</H1>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Password" />
        <Container
          width="80%"
          height="10%"
          direction="row"
          gap="12px"
          backgroundColor="transparent"
        >
          <Button
            label="Fazer Login"
            color={Color.Green}
            onClick={() => navigate(encodeURL(['home']))}
          />
          <Button label="Cadastrar-se" color={Color.Gold} />
        </Container>
      </Container>
    </>
  );
};
