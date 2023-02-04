import Friends from "./Friends/Friends";
import MyProfile from "./MyProfile/MyProfile";

const Home = () => {
  return (
    <>
      <main>
        <MyProfile />
        <div className="separate"></div>
        <Friends />
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .separate {
          height: 1px;
          background-color: #555;
        }
      `}</style>
    </>
  );
};

export default Home;
