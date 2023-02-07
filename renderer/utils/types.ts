export type UserType = {
  uid: string;
  email: string;
  nickname: string;
};

export type ChatRoomType = {};

export type MessageType = {
  message: string;
  timestamp: number;
  user: {
    nickname: string;
    uid: string;
  };
};
