import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firestore } from "../../../../firebase/firebase";
import { UserType } from "../../../../utils/types";

const useGroupProfile = () => {
  const router = useRouter();
  const roomId = router.query.roomId as string;
  const peerUids = roomId.split(",");
  const [peerUsers, setPeerUsers] = useState<UserType[]>();

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

  return { peerUsers };
};

export default useGroupProfile;
