import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
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

const useSignup = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { nickname, email, password, confirmPassword } = inputs;
  const { isLoading, mutate } = useMutation({
    mutationKey: ["signup"],
    mutationFn: ({
      email,
      password,
      nickname,
    }: {
      email: string;
      password: string;
      nickname: string;
    }) =>
      createUserWithEmailAndPassword(firebaseAuth, email, password).then(
        (res) => {
          updateProfile(res.user, { displayName: nickname });
          setDoc(doc(firestore, "Users", res.user.uid), {
            nickname,
            email,
            uid: res.user.uid,
          });
        }
      ),
    onSuccess: () => {
      alert(`Welcome ${nickname}`);
      queryClient.invalidateQueries({ queryKey: ["friends"] });
      router.push("/login");
    },
    onError: (e) => {
      console.error(e);
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
      nickname,
    });
  };

  const onSendLogin = () => {
    router.push("/login");
  };

  const nicknameLabelProps: LabelTypes = {
    children: "Nickname",
  };

  const nicknameProps: InputTypes = {
    type: "text",
    value: nickname,
    onChange,
    placeholder: "두 글자 이상 입력해주세요.",
    name: "nickname",
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

  const confirmPasswordLabelProps: LabelTypes = {
    children: "Password Confirm",
  };

  const confirmPasswordProps: InputTypes = {
    type: "password",
    value: confirmPassword,
    onChange,
    placeholder: "8자 이상 입력해주세요.",
    name: "confirmPassword",
  };

  const buttonProps: ButtonTypes = {
    children: isLoading ? "Loading" : "회원가입",
  };

  return {
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
  };
};

export default useSignup;
