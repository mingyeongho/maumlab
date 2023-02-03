import HeadInfo from "../components/HeadInfo/HeadInfo";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Global.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <div className="App">
        <HeadInfo />
        <Navbar />
        <Component {...pageProps} />
        <div id="portal"></div>
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
