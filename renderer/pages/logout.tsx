import Logout from "../components/Logout/Logout";
import withAuth from "../Hoc/withAuth";
import withNavs from "../Hoc/withNavs";

const logoutPage = () => {
  return <Logout />;
};

export default withAuth(withNavs(logoutPage));
