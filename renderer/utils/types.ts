export type UserType = {
  uid: string;
  email: string;
  nickname: string;
};

export type AddGroupUserType = {
  uid: string;
  email: string;
  nickname: string;
  isChecked: boolean;
};

export type ChatListItemType = {
  uid: string;
  messageInfo: MessageType;
};

export type GroupListItemType = {
  uid: string;
  messageInfo: GroupMEssageType;
};

export type MessageType = {
  message: string;
  timestamp: number;
  user: {
    nickname: string;
    uid: string;
  };
};

export type GroupMEssageType = {
  message: string;
  timestamp: number;
  user: {
    nickname: string;
    uid: string;
  }[];
};
