import { UserType } from "../../../../utils/types";
import * as S from "./Friend.style";
import useFriend from "./hooks/useFriend";

interface FriendProps {
  user: UserType;
}

const Friend = ({ user }: FriendProps) => {
  const { onClick } = useFriend(user);

  return (
    <S.Friend onClick={onClick}>
      <S.Thumbnail />
      <S.Profile children={user.nickname} />
    </S.Friend>
  );
};

export default Friend;
