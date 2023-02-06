import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firebaseAuth, firestore } from "../../../../firebase/firebase";

const useFriends = () => {
  const currentUser = firebaseAuth.currentUser;
  const ref = query(
    collection(firestore, "Users"),
    where("uid", "!=", currentUser.uid)
  );

  const { isLoading, data } = useQuery({
    queryKey: ["friends"],
    queryFn: () =>
      getDocs(ref).then((res) => {
        const list = [];
        res.forEach((doc) => list.push(doc.data()));
        return list;
      }),
  });

  return { isLoading, data };
};

export default useFriends;
