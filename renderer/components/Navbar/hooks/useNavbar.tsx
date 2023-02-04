import UserSvg from "../../../assets/images/user.svg";
import MessageSvg from "../../../assets/images/message.svg";
import MessengerSvg from "../../../assets/images/messenger.svg";
import SettingSvg from "../../../assets/images/setting.svg";
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
        <MessageSvg
          stroke={pathname.includes("chat") ? "#a0a0a0" : "#5f5f5f"}
          fill={pathname.includes("chat") ? "#a0a0a0" : "#5f5f5f"}
        />
      ),
    },
    {
      text: "Group",
      href: "/group",
      icon: (
        <MessengerSvg
          stroke={pathname.includes("group") ? "#a0a0a0" : "#5f5f5f"}
          fill={pathname.includes("group") ? "#a0a0a0" : "#5f5f5f"}
        />
      ),
    },
  ];

  const Setting = {
    text: "Setting",
    href: "/setting",
    icon: <SettingSvg fill={pathname === "/setting" ? "#a0a0a0" : "#5f5f5f"} />,
  };

  return { NavContents, Setting };
};

export default useNavbar;
