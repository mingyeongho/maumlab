import { signOut } from "firebase/auth";
import { useRef, useState } from "react";
import { firebaseAuth } from "../../../firebase/firebase";

const useLogout = () => {
  const [checked, setChecked] = useState(false);

  const onLogout = () => {
    signOut(firebaseAuth);
  };

  const onChange = () => {
    setChecked((prev) => !prev);
  };

  const logoutButtonProps = {
    children: "로그아웃",
    onClick: onLogout,
    disabled: !checked,
  };

  return { checked, onChange, logoutButtonProps };
};

export default useLogout;
