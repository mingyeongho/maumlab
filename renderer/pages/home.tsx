import withAuth from "../components/Hoc/withAuth";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";

const home = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default withAuth(home);
