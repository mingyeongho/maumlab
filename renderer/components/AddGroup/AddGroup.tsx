import { AddGroupUserType, UserType } from "../../utils/types";
import * as S from "./AddGroup.style";
import AddItem from "./AddItem/AddItem";
import useAddGroup from "./hooks/useAddGroup";

const AddGroup = () => {
  const { friends, onAddGroup, setFriends } = useAddGroup();

  return (
    <S.AddGroup>
      <S.Subject children="친구목록" />
      <S.List>
        {friends &&
          friends.map((friend: AddGroupUserType, idx) => (
            <AddItem key={idx} user={friend} setFriends={setFriends} />
          ))}
      </S.List>
      <S.Button children="방만들기" onClick={onAddGroup} />
    </S.AddGroup>
  );
};

export default AddGroup;
