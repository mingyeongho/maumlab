import Home from "../components/Home/Home";
import withAuth from "../Hoc/withAuth";
import withNavs from "../Hoc/withNavs";

const home = () => {
  return <Home />;
};

export default withAuth(withNavs(home));
