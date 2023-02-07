import { createGlobalStyle } from "styled-components";
import { Separate_X } from "../Common/Separate";
import ChatForm from "./ChatForm/ChatForm";
import ChatRecord from "./ChatRecord/ChatRecord";
import * as S from "./ChatRoom.style";
import Profile from "./Profile/Profile";

const ChatRoom = () => {
  return (
    <S.ChatRoom>
      <Profile />
      <Separate_X />
      <ChatRecord />
      <Separate_X />
      <ChatForm />
    </S.ChatRoom>
  );
};

export default ChatRoom;
