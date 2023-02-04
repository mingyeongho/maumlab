import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import createUser from "../../../apis/Auth/createUser";

import {
  isValidSignup,
  isValidEmail,
  isValidNickname,
  isValidPassword,
  isValidPasswordConfirm,
} from "../../../function/isValid";
import { InputProps } from "../../Common/Input";
import Loader from "../../Common/Loader";
import error from "../../utils/error";

interface SignupProps extends InputProps {
  isValid: boolean;
}

const useSignup = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { nickname, email, password, passwordConfirm } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { user } = await createUser({ email, password });
      if (user) {
        const { uid, email } = user;
        const payload = {
          uid,
          email,
          nickname,
        };
        // await setDocument({ collection: "User", id: uid, payload });
        router.push("/auth");
      }
    } catch ({ code, message }) {
      console.error(error[code]);
    }
    setIsLoading(false);
  };

  const nicknameInputProps: SignupProps = {
    label: "닉네임",
    type: "text",
    id: "nickname",
    name: "nickname",
    value: nickname,
    onChange,
    placeholder: "닉네임을 입력해주세요.(3자 이상)",
    isValid: isValidNickname({ nickname }),
  };

  const emailInputProps: SignupProps = {
    label: "이메일",
    type: "text",
    id: "email",
    name: "email",
    value: email,
    onChange,
    placeholder: "example@naver.com",
    isValid: isValidEmail({ email }),
  };

  const passwordInputProps: SignupProps = {
    value: password,
    onChange,
    label: "비밀번호",
    type: "password",
    id: "password",
    name: "password",
    placeholder: "8자 이상 입력해주세요.",
    isValid: isValidPassword({ password }),
  };

  const passwordConfirmInputProps: SignupProps = {
    label: "비밀번호 확인",
    type: "password",
    value: passwordConfirm,
    onChange,
    id: "passwordConfirm",
    name: "passwordConfirm",
    placeholder: "비밀번호를 다시 입력해주세요.",
    isValid: isValidPasswordConfirm({ passwordConfirm, password }),
  };

  const loginButtonProps = {
    children: isLoading ? <Loader /> : "회원가입",
    disabled: !isValidSignup({ nickname, email, password, passwordConfirm }),
  };

  return {
    nicknameInputProps,
    emailInputProps,
    passwordInputProps,
    passwordConfirmInputProps,
    loginButtonProps,
    onLogin,
  };
};

export default useSignup;
