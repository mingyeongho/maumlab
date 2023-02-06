import withAuth from "../Hoc/withAuth";
import withNavs from "../Hoc/withNavs";

const chatPage = () => {
  return <div>chatPage</div>;
};

export default withAuth(withNavs(chatPage));
