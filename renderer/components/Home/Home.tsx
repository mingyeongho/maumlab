import { Separate_X } from "../Common/Separate";
import Friends from "./Friends/Friends";
import * as S from "./Home.style";
import My from "./My/My";

const Home = () => {
  return (
    <S.Home>
      <My />
      <Separate_X />
      <Friends />
    </S.Home>
  );
};

export default Home;
