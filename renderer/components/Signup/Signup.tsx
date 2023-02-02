import Link from "next/link";
import React from "react";
import Input from "../Common/Input";
import useSignup from "./hooks/useSignup";

const Signup = () => {
  const {
    nicknameInputProps,
    emailInputProps,
    passwordInputProps,
    passwordConfirmInputProps,
    loginButtonProps,
    onLogin,
  } = useSignup();
  const isNicknameValid = nicknameInputProps.isValid;
  const isEmailValid = emailInputProps.isValid;
  const isPwValid = passwordInputProps.isValid;
  const isPwConfirmValid = passwordConfirmInputProps.isValid;

  return (
    <>
      <main>
        <form onSubmit={onLogin}>
          <Input {...nicknameInputProps} />
          {!isNicknameValid && (
            <span className="valid">닉네임이 3자보다 작습니다.</span>
          )}
          <Input {...emailInputProps} />
          {!isEmailValid && (
            <span className="valid">이메일 형식이 맞지 않습니다.</span>
          )}
          <Input {...passwordInputProps} />
          {!isPwValid && (
            <span className="valid">비밀번호는 8자 이상이어야 합니다.</span>
          )}
          <Input {...passwordConfirmInputProps} />
          {!isPwConfirmValid && (
            <span className="valid">비밀번호가 일치하지 않습니다.</span>
          )}
          <button {...loginButtonProps} />
        </form>
        <div className="signup_wrapper">
          <span>계정이 있으신가요? </span>
          <Link href={"/auth"}>
            <a>로그인 하러가기</a>
          </Link>
        </div>
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 14px;
        }

        .valid {
          color: #ff8f00;
        }

        button {
          width: 100%;
          height: 30px;
          font-size: 1.125rem;
          color: white;
          font-weight: bolder;
          background-color: #f57f17;
          border: none;
          outline: none;
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button:hover {
          background-color: #ff6f00;
          cursor: pointer;
        }

        button:disabled {
          background-color: #bdbdbd;
          cursor: no-drop;
        }

        .signup_wrapper {
          font-size: 0.8rem;
        }

        a {
          color: #f57f17;
        }

        a:hover {
          color: #ff6f00;
        }
      `}</style>
    </>
  );
};

export default Signup;
