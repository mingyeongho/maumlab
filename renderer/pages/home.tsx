import { Suspense } from "react";
import withAuth from "../components/Hoc/withAuth";
import Home from "../components/Home/Home";

function Index() {
  return (
    <>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}

export default withAuth(Index);
