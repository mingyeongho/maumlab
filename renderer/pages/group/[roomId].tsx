import GroupChatRoom from "../../components/GroupChatRoom/GroupChatRoom";
import withAuth from "../../Hoc/withAuth";
import withNavs from "../../Hoc/withNavs";

const GroupRoomPage = () => {
  return <GroupChatRoom />;
};

export default withAuth(withNavs(GroupRoomPage));
