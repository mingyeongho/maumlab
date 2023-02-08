import { ref, onValue } from "firebase/database";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { firebaseAuth, database } from "../../../firebase/firebase";
import { AddGroupUserType, UserType } from "../../../utils/types";
import generatedGroupId from "../../function/generatedGroupId";

const useAddGroup = () => {
  const currentUid = firebaseAuth.currentUser.uid;
  const router = useRouter();
  const [friends, setFriends] = useState<AddGroupUserType[] | null>(null);

  const friendsRef = ref(database, "Users");

  const onAddGroup = () => {
    const addGroupMember = friends.filter((friend) => friend.isChecked);
    if (addGroupMember.length > 1) {
      const addGroupMemberUids = addGroupMember.map((friend) => friend.uid);
      router.push(`/group/${generatedGroupId({ uids: addGroupMemberUids })}`);
    } else {
      console.log("1대1 채팅방으로 만들어주세요.");
    }
  };

  useEffect(() => {
    onValue(friendsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const friends = Object.values(data).filter(
          (friend: UserType) => friend.uid !== currentUid
        );
        const groupFriends = friends.map((friend: UserType) => ({
          ...friend,
          isChecked: false,
        }));
        setFriends(groupFriends);
      }
    });
  }, []);

  return { friends, onAddGroup, setFriends };
};

export default useAddGroup;
