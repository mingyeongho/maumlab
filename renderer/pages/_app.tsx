import { useRouter } from "next/router";
import React from "react";
import HeadInfo from "../components/HeadInfo/HeadInfo";
import Navbar from "../components/Navbar/Navbar";
import useIsAuth from "../hooks/useIsAuth";
import "../styles/Global.css";
import Auth from "./auth";

const App = ({ Component, pageProps }) => {
  const { isAuth } = useIsAuth();

  return (
    <>
      <div className="App">
        <HeadInfo />
        <Navbar />
        {isAuth ? <Component {...pageProps} /> : <Auth />}
      </div>
      <style jsx>{`
        .App {
          display: flex;
        }
      `}</style>
    </>
  );
};

export default App;
