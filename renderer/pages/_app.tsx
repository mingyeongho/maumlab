import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { firebaseAuth } from "../firebase/firebase";
import { GlobalStyle } from "../styles/GlobalStyle";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("logged in");
      } else {
        console.log("logged out");
      }
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
