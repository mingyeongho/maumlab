interface Props {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

const isValid = ({
  nickname,
  email,
  password,
  confirmPassword,
}: Props): boolean => {
  // nickname valid
  if (nickname.length < 2) return false;

  // email valid
  if (!Regex.test(email)) return false;

  // password valid
  if (password.length < 8) return false;

  // confirm password valid
  if (confirmPassword !== password) return false;

  return true;
};

export default isValid;
