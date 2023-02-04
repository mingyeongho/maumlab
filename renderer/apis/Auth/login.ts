import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../../firebase/firebase";

interface LoginProps {
  email: string;
  password: string;
}

const login = async ({ email, password }: LoginProps) => {
  await signInWithEmailAndPassword(firebaseAuth, email, password).catch(
    ({ message }) => console.error(message)
  );
};

export default login;
