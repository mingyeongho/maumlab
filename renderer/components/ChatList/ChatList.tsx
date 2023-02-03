import useChatList from "./hooks/useChatList";

const ChatList = () => {
  const { isLoading } = useChatList();

  return <div>{isLoading ? <div>Loading....</div> : <div>Chat</div>}</div>;
};

export default ChatList;
