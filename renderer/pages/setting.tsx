import React from "react";
import withAuth from "../components/Hoc/withAuth";
import Logout from "../components/Logout/Logout";

const Setting = () => {
  return (
    <>
      <main>
        <Logout />
      </main>
      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default withAuth(Setting);
