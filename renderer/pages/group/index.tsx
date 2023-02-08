import GroupChatList from "../../components/GroupChat/GroupChatList";
import withAuth from "../../Hoc/withAuth";
import withNavs from "../../Hoc/withNavs";

const groupPage = () => {
  return <GroupChatList />;
};

export default withAuth(withNavs(groupPage));
