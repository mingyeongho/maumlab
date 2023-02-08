import { firebaseAuth } from "../../../firebase/firebase";
import MyChat from "../../ChatRoom/ChatRecord/ChatItem/MyChat/MyChat";
import PeerChat from "../../ChatRoom/ChatRecord/ChatItem/PeerChat/PeerChat";
import * as S from "./GroupChatRecord.style";
import useGroupChatRecord from "./hooks/useGroupChatRecord";

const GroupChatRecord = () => {
  const currentUid = firebaseAuth.currentUser.uid;
  const { messages } = useGroupChatRecord(currentUid);

  return (
    <S.GroupChatRecord>
      {messages &&
        messages.length > 0 &&
        messages.map((data, idx) =>
          data.user.uid !== currentUid ? (
            <PeerChat key={idx} messageItem={data} />
          ) : (
            <MyChat key={idx} messageItem={data} />
          )
        )}
    </S.GroupChatRecord>
  );
};

export default GroupChatRecord;
