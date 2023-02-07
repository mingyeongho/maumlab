import * as S from "./ChatList.style";
import useChatList from "./hooks/useChatList";

const ChatList = () => {
  const { data, isLoading } = useChatList();

  return (
    <S.ChatList>
      {isLoading ? (
        <S.Loading children="Loading..." />
      ) : data ? (
        data.map((item, idx) => <span key={idx}>{idx}</span>)
      ) : (
        <S.EmptyChatRoom children="채팅방이 존재하지 않습니다." />
      )}
    </S.ChatList>
  );
};

export default ChatList;
