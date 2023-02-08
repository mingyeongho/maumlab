import { onValue, ref } from "firebase/database";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { database, firebaseAuth } from "../../../firebase/firebase";
import { GroupListItemType } from "../../../utils/types";

const useGroupChatList = () => {
  const router = useRouter();
  const currentUid = firebaseAuth.currentUser.uid;
  const [list, setList] = useState<GroupListItemType[]>();

  const roomListRef = ref(database, `GroupChats/${currentUid}`);

  const onClick = () => {
    router.push(`/group/addGroup`);
  };

  useEffect(() => {
    onValue(roomListRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const generateData = Object.entries(data).map((d) => ({
          uid: d[0],
          messageInfo: d[1],
        }));
        setList(generateData as GroupListItemType[]);
      }
    });
  }, []);

  return { list, onClick };
};

export default useGroupChatList;
