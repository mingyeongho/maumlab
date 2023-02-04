import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseAuth } from "../../firebase/firebase";
import { getDocument } from "../../firebase/getDocument";
import { ChatItemDTO } from "../../utils/type";

const useGetChatRooms = () => {
  const router = useRouter();
  const currentUser = firebaseAuth.currentUser;
  const { uid } = currentUser;
  const [rooms, setRooms] = useState<ChatItemDTO[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDocument({
          collectionName: "Rooms",
          documentName: uid,
        });
        const propertyValues = Object.values(data);
        setRooms(propertyValues);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return { rooms };
};

export default useGetChatRooms;
