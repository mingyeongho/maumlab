import Link from "next/link";
import React from "react";
import Input from "../Common/Input";
import useLogin from "./hooks/useLogin";

const Login = () => {
  const { emailInputProps, passwordInputProps, loginButtonProps, onLogin } =
    useLogin();

  return (
    <>
      <main>
        <form onSubmit={onLogin}>
          <Input {...emailInputProps} />
          <Input {...passwordInputProps} />
          <button {...loginButtonProps} />
        </form>
        <div className="signup_wrapper">
          <span>계정이 없으신가요? </span>
          <Link href={"/signup"}>
            <a>회원가입 하러가기</a>
          </Link>
        </div>
      </main>
      <style jsx>{`
        main {
          flex: 1;
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
          gap: 20px;
        }

        button {
          width: 100%;
          font-size: 1.125rem;
          color: white;
          font-weight: bolder;
          background-color: #f57f17;
          border: none;
          outline: none;
          border-radius: 6px;
          padding: 4px 0;
          cursor: pointer;
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

export default Login;
