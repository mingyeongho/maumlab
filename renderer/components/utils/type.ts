export type UserDTO = {
  email: string;
  nickname: string;
  uid: string;
};

export type RoomDTO = {
  uid: RoomItemDTO;
};

export type RoomItemDTO = {
  lastMessage: string;
  recentTimestamp: string;
  user: UserDTO;
};

export type MessageDTO = {
  timestamp: number;
  message: string;
  uid: string;
  nickname: string;
};
