import React, { SetStateAction } from "react";
import { UserDTO } from "./type";

export interface ModalProps {
  children: JSX.Element;
  setIsShow: React.Dispatch<SetStateAction<boolean>>;
}

export interface FriendProps {
  user: UserDTO;
}
