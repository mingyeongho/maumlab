import Room from "../../components/Chat/Room/Room";
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

export default ChatRoomPage;
