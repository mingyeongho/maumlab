import { FriendProps } from "../../utils/interface";

const Friend = ({ user }: FriendProps) => {
  const { nickname } = user;
  return (
    <>
      <div className="friend">
        <div className="thumbnail"></div>
        <div className="nickname">{nickname}</div>
      </div>
      <style jsx>{`
        .friend {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 6px;
          border-radius: 16px;
        }

        .friend:hover {
          background-color: #333;
          cursor: pointer;
        }

        .thumbnail {
          width: 46px;
          height: 46px;
          border-radius: 16px;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
          background-color: #666;
        }

        .nickname {
          font-size: 1.1rem;
        }
      `}</style>
    </>
  );
};

export default Friend;
