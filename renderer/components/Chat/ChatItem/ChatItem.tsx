import dayjs from "dayjs";
import { useRouter } from "next/router";
import { ChatItemProps } from "../../../utils/interface";
import useGetChatItem from "./useGetChatItem";

const ChatItem = ({ chatItem }: ChatItemProps) => {
  const { lastMessage, lastTimeStamp, users } = chatItem;
  const router = useRouter();
  const { user } = useGetChatItem(users);

  const onClick = () => {
    router.push(`/chat/${user?.uid}`);
  };

  return (
    <>
      <div className="chat_item" onClick={onClick}>
        <div className="thumbnail"></div>
        <div className="info">
          <span className="user">{user?.displayName}</span>
          <span className="message">{lastMessage}</span>
        </div>
        <div className="date">
          {dayjs(new Date(lastTimeStamp)).format("YY-MM-DD HH:mm:ss")}
        </div>
      </div>
      <style jsx>{`
        .chat_item {
          padding: 10px 20px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .chat_item:hover {
          cursor: pointer;
          background-color: #3d3d3d;
        }
        .thumbnail {
          width: 46px;
          height: 46px;
          background-color: orangered;
          border-radius: 20px;
        }
        .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .user {
          color: white;
        }
        .message {
          font-size: 0.875rem;
          color: #666;
          width: 60px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .date {
          font-size: 0.875rem;
          color: #666;
        }
      `}</style>
    </>
  );
};

export default ChatItem;
