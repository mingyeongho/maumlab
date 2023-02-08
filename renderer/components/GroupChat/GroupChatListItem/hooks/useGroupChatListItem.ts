import {
  getDoc,
  doc,
  query,
  collection,
  where,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { firebaseAuth, firestore } from "../../../../firebase/firebase";
import { UserType } from "../../../../utils/types";
import generatedGroupId from "../../../function/generatedGroupId";

const useGroupChatListItem = (uid: string) => {
  const router = useRouter();
  const currentUid = firebaseAuth.currentUser.uid;
  const peerUids = uid.split(",").filter((peerUid) => peerUid !== currentUid);
  const [peerUsers, setPeerUsers] = useState<UserType[]>();

  const onClick = () => {
    router.push(`/group/${generatedGroupId({ uids: peerUids })}`);
  };

  useEffect(() => {
    (async () => {
      const q = query(
        collection(firestore, "Users"),
        where("uid", "in", peerUids)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc: DocumentData) => {
        setPeerUsers((prev) => {
          if (prev) {
            return [...prev, doc.data()];
          }
          return [doc.data()];
        });
      });
    })();
  }, []);

  return { peerUsers, onClick };
};

export default useGroupChatListItem;
