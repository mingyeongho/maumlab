import { ComponentType } from "react";
import Navs from "../components/Navs/Navs";

const withNavs = (Component: ComponentType) => (props) => {
  return (
    <>
      <Navs />
      <Component {...props} />
    </>
  );
};

export default withNavs;
