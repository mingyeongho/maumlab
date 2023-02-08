import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { firebaseAuth } from "../../../firebase/firebase";
import Error from "../../../utils/error";

type LabelTypes = {
  children: string;
};

type InputTypes = {
  type: "text" | "password";
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
};

type ButtonTypes = {
  children: string;
};

const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const [error, setError] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const Login = async () => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((res) => {
        router.push("/home");
      })
      .catch(({ code }) => {
        setError(Error[code]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await Login();
  };

  const onSendSignup = () => {
    router.push("/signup");
  };

  const emailLabelProps: LabelTypes = {
    children: "Email",
  };

  const emailProps: InputTypes = {
    type: "text",
    value: email,
    onChange,
    placeholder: "example@naver.com",
    name: "email",
  };

  const passwordLabelProps: LabelTypes = {
    children: "Password",
  };

  const passwordProps: InputTypes = {
    type: "password",
    value: password,
    onChange,
    placeholder: "8자 이상 입력해주세요.",
    name: "password",
  };

  const buttonProps: ButtonTypes = {
    children: isLoading ? "Loading" : "로그인",
  };

  return {
    error,
    emailLabelProps,
    emailProps,
    passwordLabelProps,
    passwordProps,
    buttonProps,
    onSubmit,
    onSendSignup,
  };
};

export default useLogin;
