import { ChatItemProps } from "../../../../../utils/interface";
import convertTimestamp from "../../../../function/convertTimestamp";
import * as S from "./MyChat.style";

const MyChat = ({ messageItem }: ChatItemProps) => {
  const { message, timestamp, user } = messageItem;

  return (
    <S.MyChat>
      <S.Timestamp children={convertTimestamp(timestamp)} />
      <S.Message children={message} />
      <S.Thumbnail />
    </S.MyChat>
  );
};

export default MyChat;
