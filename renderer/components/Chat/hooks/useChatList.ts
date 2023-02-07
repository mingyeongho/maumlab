import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { firebaseAuth, firestore } from "../../../firebase/firebase";
import { ChatRoomType } from "../../../utils/types";

const useChatList = () => {
  const currentUser = firebaseAuth.currentUser;

  const { data, isLoading } = useQuery<null | ChatRoomType[]>({
    queryKey: ["chatlist"],
    queryFn: () =>
      getDoc(doc(firestore, "Chats", currentUser.uid)).then((res) => {
        if (res.exists()) {
          console.log(res.data());
          return [] as ChatRoomType[];
          // return res.data() as ChatRoomType[];
        }
        return null;
      }),
  });

  return { data, isLoading };
};

export default useChatList;
