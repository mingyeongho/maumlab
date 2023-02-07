import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { database, firebaseAuth, firestore } from "../../../firebase/firebase";

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
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { nickname, email, password, confirmPassword } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const Signup = async () => {
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((res) => {
        updateProfile(res.user, { displayName: nickname });

        setDoc(doc(firestore, "Users", res.user.uid), {
          email,
          nickname,
          uid: res.user.uid,
        });

        const postListRef = ref(database, "Users");
        const newPostRef = push(postListRef);
        set(newPostRef, {
          email,
          nickname,
          uid: res.user.uid,
        });
        router.push("/login");
        alert(`Welcome ${nickname}`);
      })
      .catch(({ message }) => {
        console.log(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await Signup();
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
