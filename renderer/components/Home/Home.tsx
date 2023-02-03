import MyProfile from "./MyProfile/MyProfile";
import UserList from "./UserList/UserList";

const Home = () => {
  return (
    <>
      <div className="home">
        <MyProfile />
        <div className="separate"></div>
        <UserList />
      </div>
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          gap: 5px;
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
