export type UserDTO = {
  email: string;
  nickname: string;
  uid: string;
  roomId: string[]; // user가 속해있는 roomId들의 리스트
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
