import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { firebaseAuth } from "../firebase/firebase";
import { GlobalStyle } from "../styles/GlobalStyle";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
