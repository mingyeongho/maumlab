import useIsAuth from "../hooks/useIsAuth";
import Auth from "./auth";

function Index() {
  const { isLoggedIn } = useIsAuth();
  if (!isLoggedIn) return <Auth />;

  return <div>Index</div>;
}

export default Index;
