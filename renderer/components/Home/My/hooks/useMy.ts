import { firebaseAuth } from "../../../../firebase/firebase";

const useMy = () => {
  const currentUser = firebaseAuth.currentUser;

  return { currentUser };
};

export default useMy;
