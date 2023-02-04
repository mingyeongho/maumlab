import { firebaseAuth } from "../../../firebase/firebase";

const useGetMyProfile = () => {
  const currentUser = firebaseAuth.currentUser;

  return { currentUser };
};

export default useGetMyProfile;
