import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database, firebaseAuth } from "../../../../firebase/firebase";
import { UserType } from "../../../../utils/types";

const useFriends = () => {
  const currentUid = firebaseAuth.currentUser.uid;
  const [friends, setFriends] = useState<UserType[] | null>(null);

  const friendsRef = ref(database, "Users");

  useEffect(() => {
    onValue(friendsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFriends(Object.values(data));
      }
    });
  }, []);

  return { friends };
};

export default useFriends;
