import * as S from "./GroupChatList.style";
import GroupChatListItem from "./GroupChatListItem/GroupChatListItem";
import useGroupChatList from "./hooks/useGroupChatList";

const GroupChatList = () => {
  const { list, onClick } = useGroupChatList();

  return (
    <S.GroupChatList>
      {list && list.length > 0 ? (
        list.map((room, idx) => (
          <GroupChatListItem key={idx} groupChatListItem={room} />
        ))
      ) : (
        <S.EmptyChatRoom children="채팅방이 존재하지 않습니다." />
      )}
      <S.AddButton children="+" onClick={onClick} />
    </S.GroupChatList>
  );
};

export default GroupChatList;
