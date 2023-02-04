import useGetMyProfile from "./useGetMyProfile";

const MyProfile = () => {
  const { currentUser } = useGetMyProfile();

  return (
    <>
      <div className="my_profile">
        <span>내 프로필</span>
        <div className="content">
          <div className="thumbnail"></div>
          <div className="nickname">{currentUser?.displayName}</div>
        </div>
      </div>
      <style jsx>{`
        .my_profile {
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
        }
        .content {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 4px;
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

export default MyProfile;
