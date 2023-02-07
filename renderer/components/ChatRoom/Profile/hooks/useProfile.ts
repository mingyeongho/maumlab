import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firestore } from "../../../../firebase/firebase";
import { UserType } from "../../../../utils/types";

const useProfile = () => {
  const router = useRouter();
  const uid = router.query.uid as string;
  const [peerUser, setPeerUser] = useState<UserType>();

  useEffect(() => {
    (async () => {
      await getDoc(doc(firestore, "Users", uid)).then((res) => {
        if (res.exists()) {
          setPeerUser(res.data() as UserType);
        }
      });
    })();
  }, []);

  return { peerUser };
};

export default useProfile;
