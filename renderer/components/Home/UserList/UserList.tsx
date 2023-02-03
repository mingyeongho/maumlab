import Loader from "../../Common/Loader";
import useUserList from "./hooks/useUserList";
import UserItem from "./UserItem";

const UserList = () => {
  const { isLoading, userList } = useUserList();

  return (
    <>
      <div className="userlist">
        {isLoading ? (
          <Loader />
        ) : (
          userList &&
          userList.map((user, idx) => <UserItem key={idx} user={user} />)
        )}
      </div>
      <style jsx>{`
        .userlist {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default UserList;
