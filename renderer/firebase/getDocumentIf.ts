import { query, collection, where, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";

interface GetDocumentIf {
  collectionName: string;
  id: string;
}

const getDocumentIf = async ({ collectionName, id }: GetDocumentIf) => {
  const q = query(
    collection(firestore, collectionName),
    where("uid", "!=", id)
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

export default getDocumentIf;
