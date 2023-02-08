import AddGroup from "../../components/AddGroup/AddGroup";
import withAuth from "../../Hoc/withAuth";
import withNavs from "../../Hoc/withNavs";

const addGroup = () => {
  return <AddGroup />;
};

export default withAuth(withNavs(addGroup));
