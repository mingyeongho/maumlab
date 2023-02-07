import { ChatListItemProps } from "../../../utils/interface";
import convertTimestamp from "../../function/convertTimestamp";
import * as S from "./ChatListItem.style";
import useChatListItem from "./hooks/useChatListItem";

const ChatListItem = ({ chatListItem }: ChatListItemProps) => {
  const { uid, messageInfo } = chatListItem;
  const { peerUser, onClick } = useChatListItem(uid);

  return (
    <S.ChatListItem onClick={onClick}>
      <S.Thumbnail />
      <S.MessageContainer>
        <S.Nickname children={peerUser?.nickname} />
        <S.Message children={messageInfo.message} />
      </S.MessageContainer>
      <S.Timestamp children={convertTimestamp(messageInfo.timestamp)} />
    </S.ChatListItem>
  );
};

export default ChatListItem;
