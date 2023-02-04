import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseAuth } from "../../../firebase/firebase";
import { getDocumentsById } from "../../../firebase/getDocument";
import { UserDTO } from "../../utils/type";

const useGetFriends = () => {
  const [friends, setFriends] = useState<UserDTO[]>();
  const { currentUser } = firebaseAuth;
  const { uid } = currentUser;
  // const uid = "Ws2zPfnGnMU79izoteaPbvTrl4T2"; // dummy data

  useEffect(() => {
    (async () => {
      const friendsData = await getDocumentsById({
        collectionName: "User",
        whereValue: {
          fieldPath: "uid",
          opStr: "!=",
          value: uid,
        },
      });
      friendsData.forEach((friend: DocumentData) => {
        setFriends((prev) => {
          if (!prev) {
            return [friend.data()];
          }
          return [...prev, friend.data()];
        });
      });
    })();
  }, []);

  return { friends };
};

export default useGetFriends;
