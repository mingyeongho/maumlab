import Link from "next/link";
import useNavbar from "./hooks/useNavbar";

const Navbar = () => {
  const { NavContents, Setting } = useNavbar();

  return (
    <>
      <nav>
        <div className="gnb">
          {NavContents.map((content, idx) => {
            const { href, icon } = content;
            return (
              <Link href={href} key={idx}>
                <a>{icon}</a>
              </Link>
            );
          })}
        </div>
        <div className="setting">
          {(() => {
            const { href, icon } = Setting;
            return (
              <Link href={href}>
                <a>{icon}</a>
              </Link>
            );
          })()}
        </div>
      </nav>
      <style jsx>{`
        nav {
          height: 100%;
          width: 60px;
          background-color: #404040;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }

        .gnb {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
      `}</style>
    </>
  );
};

export default Navbar;
