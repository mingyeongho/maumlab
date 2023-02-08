import { ref, onValue } from "firebase/database";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { firebaseAuth, database } from "../../../../firebase/firebase";
import { MessageType } from "../../../../utils/types";
import generatedGroupId from "../../../function/generatedGroupId";
import generatedId from "../../../function/generatedId";

const useGroupChatRecord = (currentUid: string) => {
  const roomUids = useRouter().query.roomId as string;
  const roomUidsArr = roomUids.split(",").concat(currentUid);
  const [messages, setMessages] = useState<MessageType[] | null>(null);

  const messagesRef = ref(
    database,
    `GroupMessages_${generatedGroupId({ uids: roomUidsArr })}`
  );

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMessages(Object.values(data));
      }
    });
  }, []);

  return { messages };
};

export default useGroupChatRecord;
