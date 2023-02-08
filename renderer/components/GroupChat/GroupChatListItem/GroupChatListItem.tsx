import * as S from "./GroupChatListItem.style";
import { GroupChatListItemProps } from "../../../utils/interface";
import useGroupChatListItem from "./hooks/useGroupChatListItem";
import convertTimestamp from "../../function/convertTimestamp";

const GroupChatListItem = ({ groupChatListItem }: GroupChatListItemProps) => {
  const { messageInfo, uid } = groupChatListItem;
  const { peerUsers, onClick } = useGroupChatListItem(uid);
  const peerUsersNickname = peerUsers
    ?.map((peerUser) => peerUser.nickname)
    .join();

  return (
    <S.GroupChatListItem onClick={onClick}>
      <S.Thumbnail />
      <S.MessageContainer>
        <S.Nickname children={peerUsersNickname} />
        <S.Message children={messageInfo.message} />
      </S.MessageContainer>
      <S.Timestamp children={convertTimestamp(messageInfo.timestamp)} />
    </S.GroupChatListItem>
  );
};

export default GroupChatListItem;
