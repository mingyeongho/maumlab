import { randomInt } from "crypto";
import { useRouter } from "next/router";
import React from "react";
import { FriendProps } from "../../../../utils/interface";

const Friend = ({ user }: FriendProps) => {
  const { displayName, uid } = user;
  const router = useRouter();

  const onClick = () => {
    router.push(`/chat/${uid}`);
  };

  return (
    <>
      <div className="content" onClick={onClick}>
        <div className="thumbnail"></div>
        <div className="nickname">{displayName}</div>
      </div>
      <style jsx>{`
        .content {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 4px;
          border-radius: 10px;
        }
        .content:hover {
          background-color: #444;
          cursor: pointer;
        }
        .thumbnail {
          width: 46px;
          height: 46px;
          background-color: orangered;
          border-radius: 20px;
        }
        .nickname {
          font-size: 1.2rem;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Friend;
