import { ChangeEvent, FormEvent, useState } from "react";
import { InputProps } from "../../Common/Input";

const useSignup = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputs);
  };

  const emailInputProps: InputProps = {
    label: "Email",
    type: "text",
    id: "email",
    name: "email",
    value: email,
    onChange,
    placeholder: "example@naver.com",
  };

  const passwordInputProps: InputProps = {
    value: password,
    onChange,
    label: "Password",
    type: "password",
    id: "password",
    name: "password",
    placeholder: "8자 이상 입력해주세요.",
  };

  const loginButtonProps = {
    children: "회원가입",
  };

  return { emailInputProps, passwordInputProps, loginButtonProps, onLogin };
};

export default useSignup;
