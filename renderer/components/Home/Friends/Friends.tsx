import Friend from "./Friend/Friend";
import useGetFriends from "./useGetFriends";

const Friends = () => {
  const { friends } = useGetFriends();
  return (
    <>
      <div className="friends">
        <span>친구 목록</span>
        <div className="list">
          {friends?.map((friend, idx) => (
            <Friend key={idx} user={friend} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .friends {
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </>
  );
};

export default Friends;
