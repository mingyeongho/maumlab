import Friend from "./Friend/Friend";
import useFriends from "./hooks/useFriends";
import * as S from "./Friends.style";
import { UserType } from "../../../utils/types";

const Friends = () => {
  const { friends } = useFriends();

  return (
    <S.Friends>
      <S.Subject children="친구목록" />
      {friends &&
        friends.map((friend: UserType, idx) => (
          <Friend user={friend} key={idx} />
        ))}
    </S.Friends>
  );
};

export default Friends;
