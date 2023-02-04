import { useEffect, useState } from "react";
import { firebaseAuth } from "../../../firebase/firebase";
import { getDocument } from "../../../firebase/getDocument";
import { UserDTO } from "../../utils/type";

const useGetMyProfile = () => {
  const [user, setUser] = useState<UserDTO>();
  const { currentUser } = firebaseAuth;
  const { uid } = currentUser;
  // const uid = "Ws2zPfnGnMU79izoteaPbvTrl4T2"; // dummy data

  useEffect(() => {
    (async () => {
      const userData = await getDocument({
        collectionName: "User",
        documentName: uid,
      });
      setUser(userData as UserDTO);
    })();
  }, []);

  return { user };
};

export default useGetMyProfile;
