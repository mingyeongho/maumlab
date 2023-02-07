import * as S from "./ChatList.style";
import ChatListItem from "./ChatListItem/ChatListItem";
import useChatList from "./hooks/useChatList";

const ChatList = () => {
  const { list } = useChatList();

  return (
    <S.ChatList>
      {list && list.length > 0 ? (
        list.map((room, idx) => <ChatListItem key={idx} chatListItem={room} />)
      ) : (
        <S.EmptyChatRoom children="채팅방이 존재하지 않습니다." />
      )}
    </S.ChatList>
  );
};

export default ChatList;
