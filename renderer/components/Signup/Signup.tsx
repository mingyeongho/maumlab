import Link from "next/link";
import React from "react";
import Input from "../Common/Input";
import useSignup from "./hooks/useSignup";

const Signup = () => {
  const { emailInputProps, passwordInputProps, loginButtonProps, onLogin } =
    useSignup();
  return (
    <>
      <main>
        <form onSubmit={onLogin}>
          <Input {...emailInputProps} />
          <Input {...passwordInputProps} />
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

        .signup_wrapper {
          font-size: 0.8rem;
        }

        a {
          color: #f57f17;
        }
      `}</style>
    </>
  );
};

export default Signup;
