import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebase";

interface LoginProps {
  email: string;
  password: string;
}

const login = async ({ email, password }: LoginProps) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

export default login;
