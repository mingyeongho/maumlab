import { useRouter } from "next/router";
import { UserType } from "../../../../../utils/types";

const useFriend = (user: UserType) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/chat/${user.uid}`);
  };

  return { onClick };
};

export default useFriend;
