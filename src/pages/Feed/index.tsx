import { Container } from '../../components/Container';
import { House, Plus } from '@phosphor-icons/react';
import { Button } from '../../components/Button';
import { Color } from '../../components/common/constants';
import { Header } from '../../components/Header';
import { FeedStyle } from './style';
import { BodyText, H1, H2 } from '../../components/common/typography';
import { useEffect, useState } from 'react';
import { PublicationTypes } from '../../types';
import { api, apiJSON } from '../../libs/api';

export const Feed = () => {
  const [publications, setPublications] = useState<PublicationTypes[]>([]);

  async function getPublications() {
    const { data } = await apiJSON.get<PublicationTypes[]>('/publications');
    console.log(data);
    setPublications(data);
  }

  useEffect(() => {
    getPublications();
  }, []);

  return (
    <>
      <Header>
        <Button
          color={Color.Gold}
          icon={<House size={22} color={Color.White.base} />}
        />
      </Header>
      <FeedStyle>
        <Button
          label="Criar Publicação"
          icon={<Plus size={16} weight="bold" color={Color.White.base} />}
          color={Color.Brown}
          gap="8px"
        />
        <Container
          backgroundColor={Color.Background.base}
          height={'250px'}
          justify={'center'}
          padding={'10px 16px'}
          gap={'12px'}
        >
          <Container
            backgroundColor="transparent"
            justify="space-between"
            align="center"
            direction="row"
            height="50px"
            overflow="hidden"
          >
            <H2>Ficcção Científica</H2>
            <H2>3/6</H2>
          </Container>
          <Container
            height="50%"
            backgroundColor="transparent"
            justify="start"
            align="start"
            border={`solid ${Color.Coal.base} 1px`}
            padding="8px"
          >
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor
              massa. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla at risus. Quisque purus
              magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis,
              felis ut adipiscing
            </BodyText>
          </Container>
          <Container
            direction="row"
            height="40px"
            gap="2px"
            backgroundColor="transparent"
            justify="space-between"
          >
            <Button label="Curtir" color={Color.Green} />
            <Button label="Comentar" color={Color.Brown} />
            <Button label="Entrar" color={Color.Gold} />
          </Container>
        </Container>
      </FeedStyle>
    </>
  );
};
