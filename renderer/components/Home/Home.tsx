import Friends from "./Friends/Friends";
import My from "./My/My";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="title">
          <h4>친구</h4>
        </div>
        <My />
        <div className="separate"></div>
        <Friends />
      </div>
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .title {
          padding: 0 6px;
        }

        .separate {
          height: 1px;
          background-color: #555;
        }
      `}</style>
    </>
  );
};

export default Home;
