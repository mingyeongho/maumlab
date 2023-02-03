import { getDocs, collection, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../../firebase/firebase";
import { UserDTO } from "../../utils/type";

const useHome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [myProfile, setMyProfile] = useState<UserDTO>();
  const [userList, setUserList] = useState<UserDTO[]>();

  useEffect(() => {
    const myUid = sessionStorage.getItem("user");
    setIsLoading(true);
    (async () => {
      const querySnapshot = await getDocs(collection(firestore, "Users"));
      querySnapshot.forEach((doc: DocumentData) => {
        if (doc.id === myUid) {
          setMyProfile(doc.data());
        } else {
          setUserList((prev) => {
            if (prev) {
              return [...prev, doc.data()];
            }
            return [doc.data()];
          });
        }
      });
    })();
    setIsLoading(false);
  }, []);

  return { isLoading, myProfile, userList };
};

export default useHome;
