import { useRouter } from "next/router";
import ChatList from "../components/Chat/ChatList";
import ChatRoom from "../components/Common/ChatRoom";
import withAuth from "../components/Hoc/withAuth";

const Chat = () => {
  const { query } = useRouter();

  return <main>{query.id ? <ChatRoom /> : <ChatList />}</main>;
};

export default withAuth(Chat);
