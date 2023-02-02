import MyProfile from "./MyProfile/MyProfile";
import UserList from "./UserList/UserList";

const Home = () => {
  return (
    <>
      <div className="home">
        <MyProfile />
        <UserList />
      </div>
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      `}</style>
    </>
  );
};

export default Home;
