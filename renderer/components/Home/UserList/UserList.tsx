import Profile from "../../Common/Profile";
import useUserList from "./hooks/useUserList";

const UserList = () => {
  const { userList } = useUserList();

  return (
    <>
      {userList
        ? userList.map((user, idx) => <Profile key={idx} user={user} />)
        : "Loading..."}
    </>
  );
};

export default UserList;
