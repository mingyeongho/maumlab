import UserSvg from "../../../assets/images/user.svg";
import MessengerSvg from "../../../assets/images/messenger.svg";
import MessengerGroupSvg from "../../../assets/images/messenger_group.svg";
import { useRouter } from "next/router";

const useNavbar = () => {
  const { pathname } = useRouter();

  const NavContents = [
    {
      text: "Home",
      href: "/home",
      icon: <UserSvg fill={pathname === "/home" ? "#a0a0a0" : "#5f5f5f"} />,
    },
    {
      text: "Chat",
      href: "/chat",
      icon: (
        <MessengerSvg
          stroke={pathname === "/chat" ? "#a0a0a0" : "#5f5f5f"}
          fill={pathname === "/chat" ? "#a0a0a0" : "#5f5f5f"}
        />
      ),
    },
    {
      text: "Group",
      href: "/group",
      icon: (
        <MessengerGroupSvg
          stroke={pathname === "/group" ? "#a0a0a0" : "#5f5f5f"}
        />
      ),
    },
  ];

  return { NavContents };
};

export default useNavbar;
