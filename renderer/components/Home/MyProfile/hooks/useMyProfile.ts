import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../../../firebase/firebase";
import { User } from "../../../utils/type";

const useMyProfile = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const uid = sessionStorage.getItem("user");
    (async () => {
      const docRef = doc(firestore, "User", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data() as User);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })();
  }, []);

  return { user };
};

export default useMyProfile;
