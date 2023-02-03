import { useState } from "react";
import { ProfileProps } from "../utils/interface";
import Loader from "./Loader";
import Modal from "./Modal";
import Portal from "./Portal";

const Profile = ({ user }: ProfileProps) => {
  const { nickname } = user;
  const [isModal, setIsModal] = useState(false);

  const onClick = () => {
    const portal = document.getElementById("portal");
    portal.style.display = "flex";
    setIsModal(true);
  };

  return (
    <>
      <div className="profile" onClick={onClick}>
        {user ? (
          <>
            <div className="thumbnail"></div>
            <div className="nickname">{nickname}</div>
          </>
        ) : (
          <Loader />
        )}
      </div>
      {isModal && (
        <Portal>
          <Modal setIsModal={setIsModal}>
            <div>{nickname}</div>
          </Modal>
        </Portal>
      )}
      <style jsx>{`
        .profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 6px 8px;
          border-radius: 10px;
        }

        .profile:hover {
          background-color: #444343;
          cursor: pointer;
        }

        .thumbnail {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #555;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }

        .nickname {
          font-size: 1.1rem;
          font-weight: bolder;
        }
      `}</style>
    </>
  );
};

export default Profile;
