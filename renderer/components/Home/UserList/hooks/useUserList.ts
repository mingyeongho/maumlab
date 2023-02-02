import {
  getDocs,
  collection,
  query,
  where,
  DocumentData,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../../../firebase/firebase";
import { User } from "../../../utils/type";

const useUserList = () => {
  const [userList, setUserList] = useState<User[]>();

  useEffect(() => {
    const uid = sessionStorage.getItem("user");
    (async () => {
      const q = query(collection(firestore, "User"), where("uid", "!=", uid));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc: DocumentData) => {
        // doc.data() is never undefined for query doc snapshots
        setUserList((prev) => {
          if (prev) {
            return [...prev, doc.data()];
          }
          return [doc.data()];
        });
      });
    })();
  }, []);

  return { userList };
};

export default useUserList;
