import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDocument } from "../../../firebase/getDocument";
import { UserDTO } from "../../../utils/type";

const useGetRoomById = () => {
  const router = useRouter();
  const uid = router.query.uid;
  const [user, setUser] = useState<UserDTO>();
  console.log(uid);

  useEffect(() => {
    // 상대 사용자 정보 가져오기
    (async () => {
      const user =
        uid &&
        (await getDocument({
          collectionName: "Users",
          documentName: uid as string,
        }));
      setUser(user as UserDTO);
    })();
  }, []);

  return { user };
};

export default useGetRoomById;
