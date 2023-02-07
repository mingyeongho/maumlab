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
        const friends = Object.values(data).filter(
          (friend: UserType) => friend.uid !== currentUid
        );
        setFriends(friends as UserType[]);
      }
    });
  }, []);

  return { friends };
};

export default useFriends;
