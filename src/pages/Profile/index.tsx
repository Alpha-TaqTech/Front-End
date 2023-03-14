import { RoundedImage } from '../../components/common/rounded-image';
import { Color } from '../../components/common/constants';
import { Container } from '../../components/Container';

interface UserProfile {
  userName: string;
  userAvatar: string;
  following: number;
  followers: number;
  userPosts: any[];
}

export const Profile = () => {
  return (
    <Container
      backgroundColor={Color.Background.base}
      height={'250px'}
      justify={'center'}
      padding={'10px 16px'}
      gap={'12px'}
    >
      <RoundedImage
    </Container>
  );
};
