import ChatRoom from "../../components/ChatRoom/ChatRoom";
import withAuth from "../../Hoc/withAuth";
import withNavs from "../../Hoc/withNavs";

const ChatRoomPage = () => {
  return <ChatRoom />;
};

export default withAuth(withNavs(ChatRoomPage));
