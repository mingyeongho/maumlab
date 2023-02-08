import useSignup from "./hooks/useSignup";
import * as S from "./Signup.style";

const Signup = () => {
  const {
    error,
    nicknameLabelProps,
    nicknameProps,
    emailLabelProps,
    emailProps,
    passwordLabelProps,
    passwordProps,
    confirmPasswordLabelProps,
    confirmPasswordProps,
    buttonProps,
    onSubmit,
    onSendLogin,
  } = useSignup();

  return (
    <S.Signup>
      <S.SignupForm onSubmit={onSubmit}>
        <S.InputContainer>
          <S.Label {...nicknameLabelProps} />
          <S.Input {...nicknameProps} />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label {...emailLabelProps} />
          <S.Input {...emailProps} />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label {...passwordLabelProps} />
          <S.Input {...passwordProps} />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label {...confirmPasswordLabelProps} />
          <S.Input {...confirmPasswordProps} />
        </S.InputContainer>
        <S.Button {...buttonProps} />
      </S.SignupForm>
      <S.SendLogin children={"로그인 하러가기"} onClick={onSendLogin} />
      <S.Error children={error} />
    </S.Signup>
  );
};

export default Signup;
