interface IsValidSignupProps {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface IsValidLoginProps {
  email: string;
  password: string;
}

export const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

/**
 * true면 조건을 만족한다.
 */
export const isValidNickname = ({ nickname }: { nickname: string }) => {
  return nickname.length > 2;
};

/**
 * true면 조건을 만족한다.
 */
export const isValidEmail = ({ email }: { email: string }) => {
  return regex.test(email);
};

/**
 * true면 조건을 만족한다.
 */
export const isValidPassword = ({ password }: { password: string }) => {
  return password.length > 7;
};

/**
 * true면 조건을 만족한다.
 */
export const isValidPasswordConfirm = ({
  passwordConfirm,
  password,
}: {
  passwordConfirm: string;
  password: string;
}) => {
  if (passwordConfirm.length > 7) {
    if (passwordConfirm === password) {
      return true;
    }
  }
  return false;
};

/**
 * true면 조건을 만족한다.
 */
export const isValidSignup = ({
  email,
  password,
  nickname,
  passwordConfirm,
}: IsValidSignupProps) => {
  return (
    isValidEmail({ email }) &&
    isValidNickname({ nickname }) &&
    isValidPassword({ password }) &&
    isValidPasswordConfirm({ passwordConfirm, password })
  );
};

export const isValidLogin = ({ email, password }: IsValidLoginProps) => {
  return isValidEmail({ email }) && isValidPassword({ password });
};
