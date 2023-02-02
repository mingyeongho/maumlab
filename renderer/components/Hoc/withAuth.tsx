import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

const withAuth = (Component: ComponentType) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!sessionStorage.getItem("user")) {
        router.push("/auth");
      }
    }, []);

    return <Component {...props} />;
  };
};

export default withAuth;
