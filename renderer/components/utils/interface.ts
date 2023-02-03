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
  setIsModal: React.Dispatch<SetStateAction<boolean>>;
}
