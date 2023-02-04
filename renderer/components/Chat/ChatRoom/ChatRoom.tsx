import useChatRoom from "./hooks/useChatRoom";

const ChatRoom = () => {
  const { input, onChange, onSubmit, user, record } = useChatRoom();

  return (
    <>
      <div className="chat_room">
        <div className="user">
          <div className="thumbnail"></div>
          <span>{user && user.nickname}</span>
        </div>
        <div className="separate"></div>
        <div className="chat_record">채팅내용</div>
        <div className="separate"></div>
        <form className="input" onSubmit={onSubmit}>
          <input value={input} onChange={onChange}></input>
          <button type="submit" className="submit_btn">
            전송
          </button>
        </form>
      </div>
      <style jsx>{`
        .chat_room {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .user {
          height: 60px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .separate {
          height: 1px;
          background-color: #555;
        }
        .chat_record {
          flex: 1;
          overflow-y: scroll;
        }
        .input {
          height: 80px;
          display: flex;
          justify-content: space-between;
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

        form {
          position: relative;
        }

        input {
          flex: 1;
          display: flex;
          padding: 10px;
          letter-spacing: 1px;
          outline: none;
          background-color: inherit;
          color: white;
          border: 1px solid #555;
          font-size: 1.1rem;
        }

        .submit_btn {
          background-color: #f57f17;
          color: white;
          outline: none;
          border: none;
          cursor: pointer;
          position: absolute;
          bottom: 10px;
          right: 10px;
          padding: 10px;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default ChatRoom;
