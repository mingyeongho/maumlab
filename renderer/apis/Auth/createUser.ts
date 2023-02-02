import { createUserWithEmailAndPassword } from "firebase/auth";

import { firebaseAuth } from "../../firebase/firebase";

interface CreateUserProps {
  email: string;
  password: string;
}

const createUser = async ({ email, password }: CreateUserProps) => {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export default createUser;
