import Profile from "../../Common/Profile";
import useProfile from "./hooks/useMyProfile";

const MyProfile = () => {
  const { user } = useProfile();

  return (
    <>
      <Profile user={user} />
    </>
  );
};

export default MyProfile;
