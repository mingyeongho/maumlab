import useMy from "./hooks/useMy";
import * as S from "./My.style";

const My = () => {
  const { currentUser } = useMy();
  const { displayName } = currentUser;

  return (
    <S.My>
      <S.Subject children="내 프로필" />
      <S.ProfileContainer>
        <S.Thumbnail />
        <S.Profile>{displayName}</S.Profile>
      </S.ProfileContainer>
    </S.My>
  );
};

export default My;
