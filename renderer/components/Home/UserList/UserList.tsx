import React from "react";
import Loader from "../../Common/Loader";
import Profile from "../../Common/Profile";
import { UserListProps } from "../../utils/interface";

const UserList = ({ users }: UserListProps) => {
  return (
    <>
      <div className="userList">
        {users && users.map((user, idx) => <Profile key={idx} user={user} />)}
      </div>
      <style jsx>{`
        .userList {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </>
  );
};

export default UserList;
