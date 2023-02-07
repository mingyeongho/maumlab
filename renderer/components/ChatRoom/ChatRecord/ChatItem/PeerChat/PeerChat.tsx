import { ChatItemProps } from "../../../../../utils/interface";
import convertTimestamp from "../../../../function/convertTimestamp";
import * as S from "./PeerChat.style";

const PeerChat = ({ messageItem }: ChatItemProps) => {
  const { message, timestamp, user } = messageItem;
  return (
    <S.PeerChat>
      <S.ThumbnailContainer>
        <S.Nickname children={user.nickname} />
        <S.Thumbnail />
      </S.ThumbnailContainer>
      <S.Message children={message} />
      <S.Timestamp children={convertTimestamp(timestamp)} />
    </S.PeerChat>
  );
};

export default PeerChat;
