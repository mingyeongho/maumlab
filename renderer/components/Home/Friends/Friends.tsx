import Loader from "../../Common/Loader";
import Friend from "./Friend";
import useGetFriends from "./useGetFriends";

const Friends = () => {
  const { friends } = useGetFriends();
  return (
    <div className="friends">
      {friends ? (
        friends.map((friend, idx) => <Friend key={idx} user={friend} />)
      ) : (
        <Loader />
      )}
      <style jsx>{`
        .friends {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Friends;
