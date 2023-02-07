import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { firestore } from "../../../../firebase/firebase";

const useProfile = () => {
  const router = useRouter();
  const uid = router.query.uid as string;

  const { data, isLoading } = useQuery({
    queryKey: ["getChatRoomUser"],
    queryFn: () =>
      getDoc(doc(firestore, "Users", uid)).then((res) => {
        if (res.exists()) {
          return res.data();
        }
        return null;
      }),
  });

  return { isLoading, data };
};

export default useProfile;
