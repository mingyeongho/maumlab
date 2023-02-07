import { getDatabase, push, ref, set } from "firebase/database";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { firebaseAuth, firestore } from "../../../firebase/firebase";
import generatedId from "../../function/generatedId";

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
    const db = getDatabase();
    const postListRef = ref(
      db,
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

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    writeChat();
    setInput("");
  };

  const inputProps = {
    value: input,
    onChange,
  };

  return { inputProps, onSubmit };
};

export default useChatForm;
