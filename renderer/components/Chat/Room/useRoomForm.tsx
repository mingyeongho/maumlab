import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { firebaseAuth } from "../../../firebase/firebase";
import { setDocument, updateDocument } from "../../../firebase/setDocument";

const useRoomForm = () => {
  const currentUser = firebaseAuth.currentUser;
  const router = useRouter();
  const uid = router.query.uid;
  const [input, setInput] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(input);

    try {
      // 이미 존재하는 채팅방일 경우
      await updateDocument({
        collectionName: "Rooms",
        documentName: currentUser?.uid,
        updateFields: {
          [uid as string]: {
            lastTimeStamp: Date.now(),
            lastMessage: input,
            users: [uid, currentUser?.uid],
          },
        },
      });
    } catch (e) {
      // 존재하지 않던 채팅방일 경우
      await setDocument({
        collectionName: "Rooms",
        documentName: currentUser?.uid,
        fields: {
          [uid as string]: {
            users: [uid, currentUser?.uid],
            lastTimeStamp: Date.now(),
            lastMessage: input,
          },
        },
      });
    }

    try {
      // 이미 존재하는 채팅방일 경우
      await updateDocument({
        collectionName: "Rooms",
        documentName: uid as string,
        updateFields: {
          [uid as string]: {
            lastTimeStamp: Date.now(),
            lastMessage: input,
            users: [uid, currentUser?.uid],
          },
        },
      });
    } catch (e) {
      await setDocument({
        collectionName: "Rooms",
        documentName: uid as string,
        fields: {
          [uid as string]: {
            users: [uid, currentUser?.uid],
            lastTimeStamp: Date.now(),
            lastMessage: input,
          },
        },
      });
    }

    setInput("");
  };

  const inputProps = {
    value: input,
    placeholder: "내용을 입력해주세요.",
    onChange,
  };

  const buttonProps = {
    children: "전송",
  };

  return { inputProps, buttonProps, onSubmit };
};

export default useRoomForm;
