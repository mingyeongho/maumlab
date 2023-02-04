import React, { SetStateAction } from "react";
import { ChatItemDTO, UserDTO } from "./type";

export interface ModalProps {
  children: JSX.Element;
  setIsShow: React.Dispatch<SetStateAction<boolean>>;
}

export interface FriendProps {
  user: UserDTO;
}

export interface ChatItemProps {
  chatItem: ChatItemDTO;
}
