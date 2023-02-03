import { Fragment } from "react";
import Loader from "../../Common/Loader";
import useUserList from "./hooks/useUserList";

const UserList = () => {
  const { isLoading, userList } = useUserList();
  return (
    <>
      <div className="userlist">
        {isLoading ? (
          <Loader />
        ) : (
          userList &&
          userList.map((user, idx) => (
            <div className="profile" key={idx}>
              <div className="thumbnail"></div>
              <div className="nickname">{user.nickname}</div>
            </div>
          ))
        )}
      </div>
      <style jsx>{`
        .userlist {
          display: flex;
          flex-direction: column;
        }
        .profile {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 10px;
        }
        .thumbnail {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background-color: #616161;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
        .nickname {
          font-size: 1.125rem;
          font-weight: bolder;
        }
        .profile:hover {
          background-color: #555;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default UserList;
