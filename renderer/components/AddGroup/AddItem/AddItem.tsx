import React, { ChangeEvent, SetStateAction } from "react";
import { AddGroupUserType, UserType } from "../../../utils/types";
import * as S from "./AddItem.style";

interface AddItemProps {
  user: AddGroupUserType;
  setFriends: React.Dispatch<SetStateAction<AddGroupUserType[]>>;
}

const AddItem = ({ user, setFriends }: AddItemProps) => {
  const { nickname, isChecked, uid } = user;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFriends((prev) => {
      return prev.map((friend) => {
        return friend.uid === uid
          ? { ...friend, isChecked: !isChecked }
          : friend;
      });
    });
  };

  return (
    <S.AddItem>
      <S.CheckboxContainer>
        <S.Checkbox type="checkbox" checked={isChecked} onChange={onChange} />
        <S.CheckboxLabel />
      </S.CheckboxContainer>
      <S.Thumbnail />
      <S.Profile children={nickname} />
    </S.AddItem>
  );
};

export default AddItem;
