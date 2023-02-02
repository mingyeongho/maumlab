import React from "react";
import { User } from "../utils/type";

interface ProfileProps {
  user: User;
}

const Profile = ({ user }: ProfileProps) => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <>
      <div className="profile">
        <div className="thumbnail"></div>
        <div className="nickname">{user ? user.nickname : "Loading..."}</div>
      </div>
      <style jsx>{`
        .profile {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          border-radius: 10px;
        }

        .thumbnail {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: ${randomColor};
        }

        .profile:hover {
          background-color: #353535;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Profile;
