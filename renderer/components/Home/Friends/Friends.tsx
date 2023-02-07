import Friend from "./Friend/Friend";
import useFriends from "./hooks/useFriends";
import * as S from "./Friends.style";
import { UserType } from "../../../utils/types";

const Friends = () => {
  const { data, isLoading } = useFriends();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.Friends>
      <S.Subject children="친구목록" />
      {data.map((friend: UserType, idx) => (
        <Friend user={friend} key={idx} />
      ))}
    </S.Friends>
  );
};

export default Friends;
