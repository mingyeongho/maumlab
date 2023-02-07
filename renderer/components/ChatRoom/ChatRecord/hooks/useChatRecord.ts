import { getDatabase, onValue, ref } from "firebase/database";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { firebaseAuth } from "../../../../firebase/firebase";
import { MessageType } from "../../../../utils/types";
import generatedId from "../../../function/generatedId";

const useChatRecord = () => {
  const currentUid = firebaseAuth.currentUser.uid;
  const peerUid = useRouter().query.uid as string;
  const db = getDatabase();
  const [messages, setMessages] = useState<MessageType[] | null>(null);

  const messagesRef = ref(
    db,
    `Messages_${generatedId({ currentUid, peerUid })}`
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

export default useChatRecord;
