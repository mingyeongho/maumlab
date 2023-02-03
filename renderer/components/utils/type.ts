export type UserDTO = {
  email: string;
  nickname: string;
  uid: string;
};

export type RoomDTO = {
  roomId: string;
  users: string[]; // room에 속해있는 uid 리스트
  messages: MessageDTO[];
};

export type MessageDTO = {
  timestamp: number;
  message: string;
  uid: string;
  nickname: string;
};
