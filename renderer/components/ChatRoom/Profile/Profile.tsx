import { UserType } from "../../../utils/types";
import useProfile from "./hooks/useProfile";
import * as S from "./Profile.style";

const Profile = () => {
  const { data, isLoading } = useProfile();

  if (isLoading) return <div>Loading...</div>;

  const { nickname } = data as UserType;

  return (
    <S.Profile>
      <S.Thumbnail />
      <S.Nickname children={nickname} />
    </S.Profile>
  );
};

export default Profile;
