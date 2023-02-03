import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Modal from "../../Common/Modal";
import Portal from "../../Common/Portal";
import { UserItemProps } from "../../utils/interface";

const UserItem = ({ user }: UserItemProps) => {
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);

  const onClick = () => {
    setIsShow(true);
  };

  useEffect(() => {
    if (isShow) {
      const portal = document.getElementById("portal");
      portal.style.display = "flex";
    } else {
      const portal = document.getElementById("portal");
      portal.style.display = "none";
    }
  }, [isShow]);

  const onClickChat = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsShow((prev) => !prev);
    router.push(`/chat?id=${user.uid}`);
  };

  return (
    <>
      <div className="profile" onClick={onClick}>
        <div className="thumbnail"></div>
        <div className="nickname">{user.nickname}</div>
        {isShow && (
          <Portal>
            <Modal setIsShow={setIsShow}>
              <div className="container">
                <div className="modal_content">
                  <div className="thumbnail"></div>
                  <div className="user_info">
                    <span>{user.email}</span>
                    <span>{user.nickname}</span>
                  </div>
                </div>
                <button className="enter_chat" onClick={onClickChat}>
                  채팅하기
                </button>
              </div>
            </Modal>
          </Portal>
        )}
      </div>
      <style jsx>{`
        .profile {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 10px;
          border-radius: 10px;
        }
        .thumbnail {
          width: 50px;
          height: 50px;
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

        .container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .modal_content {
          display: flex;
          gap: 12px;
        }

        .user_info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .enter_chat {
          border-radius: 10px;
          padding: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.25rem;
          font-weight: bolder;
          background-color: #f57f17;
          color: white;
          border: none;
          outline: none;
          cursor: pointer;
          transition: 0.4s background-color;
        }

        .enter_chat:hover {
          background-color: #fd7803;
        }
      `}</style>
    </>
  );
};

export default UserItem;
