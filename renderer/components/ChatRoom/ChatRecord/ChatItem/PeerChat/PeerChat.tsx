import { ChatItemProps } from "../../../../../utils/interface";
import * as S from "./PeerChat.style";

const PeerChat = ({ messageItem }: ChatItemProps) => {
  const { message, timestamp, user } = messageItem;
  return (
    <S.PeerChat>
      <S.Thumbnail />
      <S.Message children={message} />
      <S.Timestamp children={timestamp} />
    </S.PeerChat>
  );
};

export default PeerChat;
