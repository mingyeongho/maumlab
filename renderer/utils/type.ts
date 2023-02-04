export type UserDTO = {
  email: string;
  displayName: string;
  uid: string;
};

export type ChatItemDTO = {
  lastMessage: string;
  lastTimeStamp: number;
  users: string[];
};

export type MessageDTO = {
  timestamp: number;
  message: string;
  uid: string;
  nickname: string;
};
