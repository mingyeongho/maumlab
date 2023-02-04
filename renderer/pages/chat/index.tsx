import ChatRooms from "../../components/Chat/ChatRooms";
import withAuth from "../../components/Hoc/withAuth";
import Navbar from "../../components/Navbar/Navbar";

const ChatListPage = () => {
  return (
    <>
      <Navbar />
      <ChatRooms />
    </>
  );
};

export default withAuth(ChatListPage);
