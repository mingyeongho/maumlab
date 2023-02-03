import { doc, setDoc } from "firebase/firestore";
import { firestore } from "./firebase";

interface SetDocumentProps {
  collection: string;
  id?: string;
  payload: any;
}

const setDocument = async ({ collection, id, payload }: SetDocumentProps) => {
  return await setDoc(doc(firestore, collection, id), payload);
};

export default setDocument;
