import Loader from "../Common/Loader";
import useChatList from "./hooks/useChatList";

const ChatList = () => {
  const { isLoading, chatList } = useChatList();
  return (
    <>
      <div>
        {isLoading ? (
          <Loader />
        ) : chatList.length > 0 ? (
          chatList.map((room, idx) => <div key={idx}>{idx}</div>)
        ) : (
          "채팅방이 없습니다."
        )}
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ChatList;
