import { useAuthSignInWithEmailAndPassword } from "@react-query-firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

import { firebaseAuth, firestore } from "../../../firebase/firebase";

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
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const { isLoading, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInWithEmailAndPassword(firebaseAuth, email, password).then((res) => {
        alert(`Hello ${res.user.displayName}`);
      }),
    onSuccess: () => {
      router.push("/home");
    },
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({
      email,
      password,
    });
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
