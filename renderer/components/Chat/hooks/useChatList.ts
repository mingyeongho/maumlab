import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { RoomDTO } from "../../utils/type";

const useChatList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatList, setChatList] = useState<RoomDTO[]>([]);

  // 채팅방 리스트 가져오기
  useEffect(() => {
    const uid = sessionStorage.getItem("user");

    setIsLoading(false);
  }, []);

  return { isLoading, chatList };
};

export default useChatList;
