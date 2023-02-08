import * as S from "./GroupProfile.style";
import useGroupProfile from "./hooks/useGroupProfile";

const GroupProfile = () => {
  const { peerUsers } = useGroupProfile();

  const peerUsersNickname = peerUsers
    ?.map((peerUser) => peerUser.nickname)
    .join();

  return (
    <S.GroupProfile>
      <S.Thumbnail />
      <S.Nickname children={peerUsersNickname} />
    </S.GroupProfile>
  );
};

export default GroupProfile;
