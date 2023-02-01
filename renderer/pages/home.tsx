import useIsAuth from "../hooks/useIsAuth";
import Auth from "./auth";

function Index() {
  const { isAuth } = useIsAuth();
  if (!isAuth) return <Auth />;

  return <div>Index</div>;
}

export default Index;
