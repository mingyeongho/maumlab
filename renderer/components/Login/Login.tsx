import useLogin from "./hooks/useLogin";
import * as S from "./Login.style";

const Login = () => {
  const {
    emailLabelProps,
    emailProps,
    passwordLabelProps,
    passwordProps,
    buttonProps,
    onSubmit,
    onSendSignup,
  } = useLogin();

  return (
    <S.Login>
      <S.LoginForm onSubmit={onSubmit}>
        <S.InputContainer>
          <S.Label {...emailLabelProps} />
          <S.Input {...emailProps} />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label {...passwordLabelProps} />
          <S.Input {...passwordProps} />
        </S.InputContainer>
        <S.Button {...buttonProps} />
      </S.LoginForm>
      <S.SendSignup children={"회원가입 하러가기"} onClick={onSendSignup} />
    </S.Login>
  );
};

export default Login;
