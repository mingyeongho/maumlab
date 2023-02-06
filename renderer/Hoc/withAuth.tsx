import { useAuthUser } from "@react-query-firebase/auth";
import { ComponentType } from "react";
import { firebaseAuth } from "../firebase/firebase";
import LoginPage from "../pages/login";

const withAuth = (Component: ComponentType) => (props) => {
  const currentUser = firebaseAuth.currentUser;
  if (!currentUser) {
    return <LoginPage />;
  }

  return <Component {...props} />;
};

export default withAuth;
