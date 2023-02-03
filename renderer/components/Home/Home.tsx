import Loader from "../Common/Loader";
import useHome from "./hooks/useHome";
import MyProfile from "./MyProfile/MyProfile";
import UserList from "./UserList/UserList";

const Home = () => {
  const { isLoading, myProfile, userList } = useHome();

  return (
    <>
      <div className="home">
        {isLoading && myProfile && userList ? (
          <Loader />
        ) : (
          <>
            <MyProfile user={myProfile} />
            <div className="separate"></div>
            <UserList users={userList} />
          </>
        )}
      </div>
      <style jsx>{`
        .home {
          flex: 1;
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
