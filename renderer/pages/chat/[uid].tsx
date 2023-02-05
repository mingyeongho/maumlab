import Room from "../../components/Chat/Room/Room";
import withAuth from "../../components/Hoc/withAuth";
import Navbar from "../../components/Navbar/Navbar";

const ChatRoomPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Room />
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default withAuth(ChatRoomPage);
