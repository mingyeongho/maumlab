import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import getDocumentIf from "../../../firebase/getDocumentIf";
import { RoomDTO } from "../../utils/type";

const useChatList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatList, setChatList] = useState<RoomDTO[]>([]);

  useEffect(() => {
    const uid = sessionStorage.getItem("user");
    (async () => {
      const data = await getDocumentIf({ collectionName: "Room", id: uid });
      if (data.size > 0) {
        data.forEach((chat: DocumentData) =>
          setChatList((prev) => [...prev, chat.data()])
        );
      } else {
        setChatList([]);
      }
    })();
    setIsLoading(false);
  }, []);

  return { isLoading, chatList };
};

export default useChatList;
