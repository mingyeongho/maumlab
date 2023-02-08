import { Separate_X } from "../Common/Separate";
import GroupChatForm from "./ChatForm/GroupChatForm";
import GroupChatRecord from "./ChatRecord/GroupChatRecord";
import * as S from "./GroupChatRoom.style";
import GroupProfile from "./Profile/GroupProfile";

const GroupChatRoom = () => {
  return (
    <S.GroupChatRoom>
      <GroupProfile />
      <Separate_X />
      <GroupChatRecord />
      <Separate_X />
      <GroupChatForm />
    </S.GroupChatRoom>
  );
};

export default GroupChatRoom;
