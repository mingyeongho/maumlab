import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import setMessage from "../../../apis/Chat/setMessage";
import setRooms from "../../../apis/Chat/setRooms";
import { firebaseAuth } from "../../../firebase/firebase";

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

    await setRooms({
      sender: currentUser?.uid,
      receiver: uid as string,
      message: input,
      timestamp: Date.now(),
    });

    await setMessage({
      senderName: currentUser?.displayName,
      sender: currentUser?.uid,
      receiver: uid as string,
      message: input,
      timestamp: Date.now(),
    });

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
