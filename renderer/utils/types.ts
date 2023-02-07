export type UserType = {
  uid: string;
  email: string;
  nickname: string;
};

export type ChatListType = {
  list: ChatListItemType[];
};

export type ChatListItemType = {
  uid: string;
  messageInfo: MessageType;
};

export type MessageType = {
  message: string;
  timestamp: number;
  user: {
    nickname: string;
    uid: string;
  };
};
