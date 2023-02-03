import { useEffect, useState } from "react";
import getDocumentById from "../../../../firebase/getDocumentById";
import { UserDTO } from "../../../utils/type";

const useMyProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    const uid = sessionStorage.getItem("user");
    (async () => {
      const data = await getDocumentById({ collectionName: "User", id: uid });
      setUser(data as UserDTO);
    })();
    setIsLoading(false);
  }, []);

  return { isLoading, user };
};

export default useMyProfile;
