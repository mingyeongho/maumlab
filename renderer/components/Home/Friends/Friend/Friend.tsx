import { UserType } from "../../../../utils/types";
import * as S from "./Friend.style";

interface FriendProps {
  user: UserType;
}

const Friend = ({ user }: FriendProps) => {
  return (
    <S.Friend>
      <S.Thumbnail />
      <S.Profile children={user.nickname} />
    </S.Friend>
  );
};

export default Friend;
