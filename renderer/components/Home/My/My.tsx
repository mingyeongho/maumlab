import Loader from "../../Common/Loader";
import useGetMyProfile from "./useGetMyProfile";

const My = () => {
  const { user } = useGetMyProfile();

  return (
    <>
      {user ? (
        <div className="my_profile">
          <div className="thumbnail"></div>
          <div className="nickname">{user.nickname}</div>
        </div>
      ) : (
        <Loader />
      )}
      <style jsx>{`
        .my_profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 6px;
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

export default My;
