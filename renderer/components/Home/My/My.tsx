import useMy from "./hooks/useMy";
import * as S from "./My.style";

const My = () => {
  const { currentUser } = useMy();
  const { displayName } = currentUser;

  return (
    <S.My>
      <S.Thumbnail />
      <S.Profile>{displayName}</S.Profile>
    </S.My>
  );
};

export default My;
