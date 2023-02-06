import Friend from "./Friend/Friend";
import useFriends from "./hooks/useFriends";
import * as S from "./Friends.style";

const Friends = () => {
  const { data, isLoading } = useFriends();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.Friends>
      {data.map((friend, idx) => (
        <Friend user={friend} key={idx} />
      ))}
    </S.Friends>
  );
};

export default Friends;
