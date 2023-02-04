import { onSnapshot, doc } from "firebase/firestore";
import { firestore } from "./firebase";

interface SubscribeProps {
  colletion: string;
  document: string;
}

const subscribe = ({ colletion, document }: SubscribeProps) => {
  const unsub = onSnapshot(doc(firestore, colletion, document), (doc) => {
    console.log("Current data: ", doc.data());
  });
  return unsub;
};

export default subscribe;
