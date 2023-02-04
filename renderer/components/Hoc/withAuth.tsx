import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import { firebaseAuth } from "../../firebase/firebase";
import Auth from "../../pages/auth";

const withAuth = (Component: ComponentType) => (props) => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("logged in");
      } else {
        console.log("logged out");
        router.push("/auth");
        return <></>;
      }
    });
  }, []);

  return <Component {...props} />;
};

export default withAuth;
