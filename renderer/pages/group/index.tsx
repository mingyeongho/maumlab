import withAuth from "../../Hoc/withAuth";
import withNavs from "../../Hoc/withNavs";

const groupPage = () => {
  return <main>groupPage</main>;
};

export default withAuth(withNavs(groupPage));
