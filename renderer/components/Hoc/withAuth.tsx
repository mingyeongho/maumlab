import { ComponentType } from "react";
import { firebaseAuth } from "../../firebase/firebase";
import Auth from "../../pages/auth";

const withAuth = (Component: ComponentType) => (props) => {
  const currentUser = firebaseAuth.currentUser;

  if (!currentUser) {
    return <Auth />;
  }

  return <Component {...props} />;
};

export default withAuth;
