import { RoundedImage } from '../../components/common/rounded-image';
import { Color } from '../../components/common/constants';
import { Container } from '../../components/Container';
import { H1, Label } from '../../components/common/typography';
import { Button } from '../../components/Button';

const FAKE_DATA = {
  username: 'username',
  userImage: 'blue',
  followers: 41,
  following: 21,
  posts: [],
};

export const Profile = () => {
  return (
    <Container
      backgroundColor={Color.Background.base}
      justify={'start'}
      align={'start'}
      padding={'10px 16px'}
      gap={'12px'}
    >
      <Container
        direction="row"
        backgroundColor="transparent"
        height="fit-content"
        width="100%"
        align="start"
        justify="space-around"
      >
        <RoundedImage background={FAKE_DATA.userImage} size={100} border />
        <Container
          backgroundColor="transparent"
          height="fit-content"
          width="fit-content"
          align="start"
        >
          <Container backgroundColor="transparent" margin="auto">
            <H1>username</H1>
          </Container>
          <Label>Seguidores {FAKE_DATA.followers}</Label>
          <Label>Seguindo {FAKE_DATA.following}</Label>
        </Container>
        <Container backgroundColor="transparent" width="fit-content" gap="16px">
          <Button color={Color.Green} label="Seguir" />
          <Button color={Color.Red} label="Bloquear" />
        </Container>
      </Container>
    </Container>
  );
};
