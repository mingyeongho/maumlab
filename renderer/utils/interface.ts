import { ChatListItemType, GroupListItemType, MessageType } from "./types";

export interface ChatItemProps {
  messageItem: MessageType;
}

export interface ChatListItemProps {
  chatListItem: ChatListItemType;
}

export interface GroupChatListItemProps {
  groupChatListItem: GroupListItemType;
}
