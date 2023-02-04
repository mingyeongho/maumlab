import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { MessageDTO, UserDTO } from "../../../utils/type";

const useChatRoom = () => {
  const { query } = useRouter();
  const { id } = query;
  const [input, setInput] = useState("");
  const [user, setUser] = useState<UserDTO>();
  const [record, setRecord] = useState<MessageDTO[]>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log(input);
    setInput("");
  };

  useEffect(() => {
    const uid = sessionStorage.getItem("user");
    console.log(`uid: ${uid}, id: ${id}`);
  }, [id]);

  return { input, onChange, onSubmit, user, record };
};

export default useChatRoom;
