import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database, firebaseAuth } from "../../../firebase/firebase";
import { ChatListItemType } from "../../../utils/types";

const useChatList = () => {
  const currentUid = firebaseAuth.currentUser.uid;
  const [list, setList] = useState<ChatListItemType[]>();

  const roomListRef = ref(database, `Chats/${currentUid}`);

  useEffect(() => {
    onValue(roomListRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const generateData = Object.entries(data).map((d) => ({
          uid: d[0],
          messageInfo: d[1],
        }));
        setList(generateData as ChatListItemType[]);
      }
    });
  }, []);

  return { list };
};

export default useChatList;
