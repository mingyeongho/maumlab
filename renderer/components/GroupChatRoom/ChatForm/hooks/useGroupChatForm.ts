import { ref, push, set, update } from "firebase/database";
import { useRouter } from "next/router";
import { useState, ChangeEvent, FormEvent } from "react";
import { firebaseAuth, database } from "../../../../firebase/firebase";
import generatedGroupId from "../../../function/generatedGroupId";

const useGroupChatForm = () => {
  const currentUser = firebaseAuth.currentUser;
  const peerUids = useRouter().query.roomId as string;
  const [currentUid, currentNickname] = [
    currentUser.uid,
    currentUser.displayName,
  ];
  const uids = peerUids.split(",").concat(currentUid);
  const [input, setInput] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const writeChat = () => {
    const postListRef = ref(
      database,
      `GroupMessages_${generatedGroupId({ uids })}`
    );
    const newPostRef = push(postListRef);
    set(newPostRef, {
      message: input,
      timestamp: Date.now(),
      user: {
        uid: currentUid,
        nickname: currentNickname,
      },
    });
  };

  const updateChats = () => {
    const postData = {
      message: input,
      timestamp: Date.now(),
      user: {
        uid: currentUid,
        nickname: currentNickname,
      },
    };

    const updates = {};
    uids.forEach((uid) => {
      updates[`/GroupChats/${uid}/${generatedGroupId({ uids })}`] = postData;
    });

    return update(ref(database), updates);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    writeChat();
    updateChats();
    setInput("");
  };

  const inputProps = {
    value: input,
    onChange,
  };

  return { inputProps, onSubmit };
};

export default useGroupChatForm;
