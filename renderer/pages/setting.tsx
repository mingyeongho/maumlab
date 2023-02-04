import withAuth from "../components/Hoc/withAuth";
import Logout from "../components/Home/Logout/Logout";
import Navbar from "../components/Navbar/Navbar";

const Setting = () => {
  return (
    <main>
      <Navbar />
      <Logout />
    </main>
  );
};

export default withAuth(Setting);
