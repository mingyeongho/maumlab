import withAuth from "../../components/Hoc/withAuth";
import Navbar from "../../components/Navbar/Navbar";

const GroupChatListPage = () => {
  return (
    <main>
      <Navbar />
      <div>GroupChatListPage</div>
    </main>
  );
};

export default withAuth(GroupChatListPage);
