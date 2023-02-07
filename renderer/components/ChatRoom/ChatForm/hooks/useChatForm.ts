import { child, getDatabase, push, ref, set, update } from "firebase/database";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  database,
  firebaseAuth,
  firestore,
} from "../../../../firebase/firebase";
import generatedId from "../../../function/generatedId";

const useChatForm = () => {
  const currentUser = firebaseAuth.currentUser;
  const peerUid = useRouter().query.uid as string;
  const [currentUid, currentNickname] = [
    currentUser.uid,
    currentUser.displayName,
  ];
  const [input, setInput] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const writeChat = () => {
    const postListRef = ref(
      database,
      `Messages_${generatedId({ currentUid, peerUid })}`
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
    updates[`/Chats/${currentUid}/${peerUid}`] = postData;
    updates[`/Chats/${peerUid}/${currentUid}`] = postData;

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

export default useChatForm;
