import { useRouter } from "next/router";
import { useState } from "react";

const useLogout = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const onLogout = () => {
    router.push("/auth");
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
