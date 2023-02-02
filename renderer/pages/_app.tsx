import { onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import HeadInfo from "../components/HeadInfo/HeadInfo";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Global.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <div className="App">
        <HeadInfo />
        <RecoilRoot>
          <Navbar />
          <Component {...pageProps} />
        </RecoilRoot>
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
