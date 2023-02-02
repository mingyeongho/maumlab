import Profile from "./Profile/Profile";
import UserList from "./UserList/UserList";

const Home = () => {
  return (
    <>
      <div className="home">
        <Profile />
        <UserList />
      </div>
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
      `}</style>
    </>
  );
};

export default Home;
