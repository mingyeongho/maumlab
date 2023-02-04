import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseAuth } from "../../../firebase/firebase";
import { getDocumentsById } from "../../../firebase/getDocument";
import { UserDTO } from "../../../utils/type";

const useGetFriends = () => {
  const currentUser = firebaseAuth.currentUser;
  const [friends, setFriends] = useState<UserDTO[]>();

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocumentsById({
        collectionName: "Users",
        whereValue: { fieldPath: "uid", opStr: "!=", value: currentUser.uid },
      });
      querySnapshot.forEach((doc: DocumentData) => {
        setFriends((prev) => {
          if (prev) {
            return [...prev, doc.data()];
          }
          return [doc.data()];
        });
      });
    })();
  }, []);

  return { friends };
};

export default useGetFriends;
