import withAuth from "../Hoc/withAuth";
import withNavs from "../Hoc/withNavs";

const groupPage = () => {
  return <div>groupPage</div>;
};

export default withAuth(withNavs(groupPage));
