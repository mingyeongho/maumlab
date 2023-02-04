import {
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  browserLocalPersistence,
} from "firebase/auth";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import login from "../../../apis/Auth/login";
import { firebaseAuth } from "../../../firebase/firebase";
import { isValidLogin } from "../../../function/isValid";
import { InputProps } from "../../Common/Input";
import Loader from "../../Common/Loader";
import error from "../../utils/error";

const useLogin = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await login({ email, password });
    router.push("/home");
    setIsLoading(false);
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
    children: isLoading ? <Loader /> : "로그인",
    disabled: !isValidLogin({ email, password }),
  };

  return { emailInputProps, passwordInputProps, loginButtonProps, onLogin };
};

export default useLogin;
