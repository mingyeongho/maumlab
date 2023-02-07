import { createGlobalStyle } from "styled-components";
import { firebaseAuth } from "../../../firebase/firebase";
import MyChat from "./ChatItem/MyChat/MyChat";
import PeerChat from "./ChatItem/PeerChat/PeerChat";
import * as S from "./ChatRecord.style";
import useChatRecord from "./hooks/useChatRecord";

const ChatRecord = () => {
  const currentUid = firebaseAuth.currentUser.uid;
  const { messages } = useChatRecord();

  return (
    <S.ChatRecord>
      {messages &&
        messages.length > 0 &&
        messages.map((data, idx) =>
          data.user.uid !== currentUid ? (
            <PeerChat key={idx} messageItem={data} />
          ) : (
            <MyChat key={idx} messageItem={data} />
          )
        )}
    </S.ChatRecord>
  );
};

export default ChatRecord;
