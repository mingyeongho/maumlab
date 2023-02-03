import React, { SetStateAction } from "react";
import { UserDTO } from "./type";

export interface ProfileProps {
  user: UserDTO;
}

export interface MyProfileProps {
  user: UserDTO;
}

export interface UserListProps {
  users: UserDTO[];
}

export interface ModalProps {
  children: JSX.Element;
  setIsShow: React.Dispatch<SetStateAction<boolean>>;
}

export interface UserDetailProps {
  user: UserDTO;
}

export interface UserItemProps {
  user: UserDTO;
}
