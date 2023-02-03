import withAuth from "../components/Hoc/withAuth";
import Home from "../components/Home/Home";

function Index() {
  return (
    <>
      <main>
        <Home />
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          padding: 10px;
        }
      `}</style>
    </>
  );
}

export default withAuth(Index);
