import * as S from "./Navs.style";
import ProfileSvg from "../../assets/images/user.svg";
import ChatSvg from "../../assets/images/message.svg";
import GroupSvg from "../../assets/images/messenger.svg";
import LogoutSvg from "../../assets/images/setting.svg";
import { useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navs = () => {
  const { pathname } = useRouter();

  const NavsContents = useMemo(
    () => [
      {
        svg: <ProfileSvg fill={pathname === "/home" ? "#e3e3e3" : "#5f5f5f"} />,
        href: "/home",
        text: "Home",
      },
      {
        svg: (
          <ChatSvg
            stroke={pathname.includes("chat") ? "#e3e3e3" : "#5f5f5f"}
            fill={pathname.includes("chat") ? "#e3e3e3" : "#5f5f5f"}
          />
        ),
        href: "/chat",
        text: "Chat",
      },
      {
        svg: (
          <GroupSvg
            stroke={pathname.includes("group") ? "#e3e3e3" : "#5f5f5f"}
            fill={pathname.includes("group") ? "#e3e3e3" : "#5f5f5f"}
          />
        ),
        href: "/group",
        text: "Group",
      },
    ],
    [pathname]
  );

  const NavLogout = useMemo(
    () => ({
      svg: <LogoutSvg fill={pathname === "/setting" ? "#e3e3e3" : "#5f5f5f"} />,
      href: "logout",
      text: "Logout",
    }),
    [pathname]
  );

  return (
    <S.Navs>
      <S.Gnb>
        {NavsContents.map((content, idx) => (
          <Link key={idx} href={content.href}>
            <S.A children={content.svg} />
          </Link>
        ))}
      </S.Gnb>
      <S.Logout>
        <Link href={NavLogout.href}>
          <S.A children={NavLogout.svg} />
        </Link>
      </S.Logout>
    </S.Navs>
  );
};

export default Navs;
