import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { firestore } from "../../../../firebase/firebase";
import { UserType } from "../../../../utils/types";

const useProfile = () => {
  const router = useRouter();
  const uid = router.query.uid as string;

  const { data } = useQuery({
    queryKey: ["getChatRoomUser"],
    queryFn: () =>
      getDoc(doc(firestore, "Users", uid)).then((res) => {
        return res.data();
      }),
  });

  return { data };
};

export default useProfile;
