import React from "react";
import useIsAuth from "../hooks/useIsAuth";
import Auth from "./auth";

const Chat = () => {
  const { isAuth } = useIsAuth();
  if (!isAuth) return <Auth />;

  return <div>Chat</div>;
};

export default Chat;
