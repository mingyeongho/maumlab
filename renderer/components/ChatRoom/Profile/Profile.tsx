import useProfile from "./hooks/useProfile";
import * as S from "./Profile.style";

const Profile = () => {
  const { peerUser } = useProfile();

  return (
    <S.Profile>
      <S.Thumbnail />
      <S.Nickname children={peerUser?.nickname} />
    </S.Profile>
  );
};

export default Profile;
