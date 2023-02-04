import ChatItem from "./ChatItem/ChatItem";
import useGetChatRooms from "./useGetChatRooms";

const ChatRooms = () => {
  const { rooms } = useGetChatRooms();

  return (
    <>
      <main>
        <span className="title">채팅</span>
        {rooms ? (
          rooms.map((room, idx) => <ChatItem key={idx} chatItem={room} />)
        ) : (
          <span className="empty">채팅방이 없습니다.</span>
        )}
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .title {
          padding: 10px;
        }
        .empty {
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default ChatRooms;
