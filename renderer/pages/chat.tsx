import React from "react";
import useIsAuth from "../hooks/useIsAuth";
import Auth from "./auth";

const Chat = () => {
  const { isLoggedIn } = useIsAuth();
  if (!isLoggedIn) return <Auth />;

  return <div>Chat</div>;
};

export default Chat;
