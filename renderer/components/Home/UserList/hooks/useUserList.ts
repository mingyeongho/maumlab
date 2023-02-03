import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import getDocumentIf from "../../../../firebase/getDocumentIf";
import { UserDTO } from "../../../utils/type";

const useUserList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState<UserDTO[]>();

  useEffect(() => {
    const uid = sessionStorage.getItem("user");
    (async () => {
      const data = await getDocumentIf({ collectionName: "User", id: uid });
      data.forEach((doc: DocumentData) => {
        setUserList((prev) => {
          if (!prev) {
            return [doc.data()];
          }
          return [...prev, doc.data()];
        });
      });
    })();
    setIsLoading(false);
  }, []);

  return { isLoading, userList };
};

export default useUserList;
