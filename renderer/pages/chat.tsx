import ChatList from "../components/ChatList/ChatList";
import withAuth from "../components/Hoc/withAuth";

const Chat = () => {
  return (
    <main>
      <ChatList />
    </main>
  );
};

export default withAuth(Chat);
