import { Container } from '../../components/Container';
import { House, Plus } from '@phosphor-icons/react';
import { Button } from '../../components/Button';
import { Color } from '../../components/common/constants';
import { Header } from '../../components/Header';
import { FeedStyle } from './style';
import {
  BodyText,
  H1,
  H2,
  MiniLabel,
} from '../../components/common/typography';
import { useEffect, useState } from 'react';
import { api, apiJSON } from '../../libs/api';

interface PublicationTypes {
  title: string;
  description: string;
  playersAmount: number;
  playersLimit: number;
  likes: number;
  comments: number;
}

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
        {publications.map((publication) => (
          <>
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
                <H2>{publication.title}</H2>
                <H2>
                  {publication.playersAmount}/6{publication.playersLimit}
                </H2>
              </Container>
              <Container
                height="50%"
                backgroundColor="transparent"
                justify="start"
                align="start"
                border={`solid ${Color.Coal.base} 1px`}
                padding="8px"
              >
                <BodyText>{publication.description}</BodyText>
              </Container>
              <Container
                direction="row"
                height="60px"
                gap="8px"
                backgroundColor="transparent"
                align="start"
                overflow="hidden"
              >
                <span>
                  <Button label="Curtir" color={Color.Green} />
                  <MiniLabel>{publication.likes} Curtidas</MiniLabel>
                </span>
                <span>
                  <Button label="Comentar" color={Color.Brown} />
                  <MiniLabel>{publication.comments} Comentários</MiniLabel>
                </span>

                <Button label="Entrar" color={Color.Gold} />
              </Container>
            </Container>
          </>
        ))}
      </FeedStyle>
    </>
  );
};
