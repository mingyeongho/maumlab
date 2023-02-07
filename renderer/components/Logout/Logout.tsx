import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { firebaseAuth } from "../../firebase/firebase";
import * as S from "./Logout.style";

const Logout = () => {
  const router = useRouter();
  const onClick = () => {
    signOut(firebaseAuth);
    router.push(`/login`);
  };

  return (
    <S.Logout>
      <S.Button children={"로그아웃"} onClick={onClick} />
    </S.Logout>
  );
};

export default Logout;
