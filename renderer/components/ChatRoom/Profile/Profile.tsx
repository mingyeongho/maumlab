import { UserType } from "../../../utils/types";
import useProfile from "./hooks/useProfile";
import * as S from "./Profile.style";

const Profile = () => {
  const { data } = useProfile();
  const { uid, email, nickname } = data as UserType;
  console.log(data);

  return (
    <S.Profile>
      <S.Thumbnail />
      <S.Nickname children={nickname} />
    </S.Profile>
  );
};

export default Profile;
