import Link from "next/link";
import UserSvg from "../../assets/images/user.svg";
import MessengerSvg from "../../assets/images/messenger.svg";
import MessengerGroupSvg from "../../assets/images/messenger_group.svg";

const NavContents = [
  {
    text: "Home",
    href: "/home",
    icon: <UserSvg fill="#a0a0a0" />,
  },
  {
    text: "Chat",
    href: "/chat",
    icon: <MessengerSvg stroke="#a0a0a0" fill="#a0a0a0" />,
  },
  {
    text: "Group",
    href: "/group",
    icon: <MessengerGroupSvg stroke="#a0a0a0" />,
  },
];

const Navbar = () => {
  return (
    <>
      <nav>
        {NavContents.map((content, idx) => {
          const { text, href, icon } = content;

          return (
            <Link href={href} key={idx}>
              <a>{icon}</a>
            </Link>
          );
        })}
      </nav>
      <style jsx>{`
        nav {
          height: 100%;
          width: 50px;
          background-color: #362b26;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          color: white;
          padding: 20px 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;
