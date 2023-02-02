import { useRouter } from "next/router";
import { ComponentType } from "react";
import { firebaseAuth } from "../../firebase/firebase";

const withAuth = (Component: ComponentType) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();

      //   const accessToken = localStorage.getItem("accessToken");
      const isLoggedIn = firebaseAuth.currentUser ? true : false;

      // If there is no access token we redirect to "/" page.
      if (!isLoggedIn) {
        Router.replace("/auth");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <Component {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
