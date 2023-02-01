import Link from "next/link";
import useNavbar from "./hooks/useNavbar";

const Navbar = () => {
  const { NavContents } = useNavbar();

  return (
    <>
      <nav>
        {NavContents.map((content, idx) => {
          const { href, icon } = content;
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
          width: 60px;
          background-color: #404040;
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
