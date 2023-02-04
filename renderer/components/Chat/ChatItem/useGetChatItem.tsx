import { useEffect, useState } from "react";
import { firebaseAuth } from "../../../firebase/firebase";
import { getDocument } from "../../../firebase/getDocument";
import { UserDTO } from "../../../utils/type";

const useGetChatItem = (users: string[]) => {
  const currentUser = firebaseAuth.currentUser;
  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    (async () => {
      try {
        const targetId = users.find((user) => user !== currentUser.uid);
        const data = await getDocument({
          collectionName: "Users",
          documentName: targetId,
        });
        setUser(data as UserDTO);
      } catch (e) {}
    })();
  }, []);

  return { user };
};

export default useGetChatItem;
