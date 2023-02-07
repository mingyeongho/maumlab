import ChatList from "../../components/Chat/ChatList";
import withAuth from "../../Hoc/withAuth";
import withNavs from "../../Hoc/withNavs";

const chatPage = () => {
  return <ChatList />;
};

export default withAuth(withNavs(chatPage));
