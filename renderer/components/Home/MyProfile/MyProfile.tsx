import Loader from "../../Common/Loader";
import useMyProfile from "./hooks/useMyProfile";

const MyProfile = () => {
  const { isLoading, user } = useMyProfile();
  return (
    <>
      <div className="my_profile">
        {isLoading ? (
          <Loader />
        ) : (
          user && (
            <>
              <div className="thumbnail"></div>
              <div className="nickname">{user.nickname}</div>
            </>
          )
        )}
      </div>
      <style jsx>{`
        .my_profile {
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
            rgba(2, 1, 1, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }

        .nickname {
          font-size: 1.125rem;
          font-weight: bolder;
        }
      `}</style>
    </>
  );
};

export default MyProfile;
