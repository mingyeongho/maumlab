import { onValue, ref } from "firebase/database";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { database, firebaseAuth } from "../../../../firebase/firebase";
import { MessageType } from "../../../../utils/types";
import generatedId from "../../../function/generatedId";

const useChatRecord = () => {
  const currentUid = firebaseAuth.currentUser.uid;
  const peerUid = useRouter().query.uid as string;
  const [messages, setMessages] = useState<MessageType[] | null>(null);

  const messagesRef = ref(
    database,
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
