import React from "react";
import Loader from "../../Common/Loader";
import Profile from "../../Common/Profile";
import { MyProfileProps } from "../../utils/interface";

const MyProfile = ({ user }: MyProfileProps) => {
  return <div>{user ? <Profile user={user} /> : <Loader />}</div>;
};

export default MyProfile;
