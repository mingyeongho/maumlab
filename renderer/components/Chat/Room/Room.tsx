import { useRouter } from "next/router";
import useGetRoomById from "./useGetRoomById";
import useRoomForm from "./useRoomForm";

const Room = () => {
  const { user } = useGetRoomById();
  const { inputProps, buttonProps, onSubmit } = useRoomForm();

  return (
    <>
      <>
        <div className="user">
          <div className="thumbnail"></div>
          <div className="nickname">{user?.displayName}</div>
        </div>
        <div className="separate"></div>
        <div className="records"></div>
        <div className="separate"></div>
        <form onSubmit={onSubmit}>
          <input type="text" {...inputProps} />
          <button type="submit" {...buttonProps}></button>
        </form>
      </>
      <style jsx>{`
        .separate {
          height: 1px;
          background-color: #555;
        }
        .user {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 10px 20px;
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
        .records {
          flex: 1;
          overflow: scroll;
        }
        form {
          display: flex;
          padding: 10px 12px;
        }
        input {
          padding: 6px;
          background-color: inherit;
          color: white;
          letter-spacing: 1px;
          border: none;
          outline: none;
          flex: 1;
        }
        button {
          background-color: #f57f17;
          color: white;
          padding: 8px;
          border-radius: 10px;
          border: none;
          outline: none;
        }
        button:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Room;
