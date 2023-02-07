import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firestore } from "../../../../firebase/firebase";
import { UserType } from "../../../../utils/types";

const useChatListItem = (uid: string) => {
  const router = useRouter();
  const [peerUser, setPeerUser] = useState<UserType>();

  const onClick = () => {
    router.push(`/chat/${uid}`);
  };

  useEffect(() => {
    (async () => {
      const docSnap = await getDoc(doc(firestore, "Users", uid));
      if (docSnap.exists()) {
        setPeerUser(docSnap.data() as UserType);
      }
    })();
  }, []);

  return { peerUser, onClick };
};

export default useChatListItem;
