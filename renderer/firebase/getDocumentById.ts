import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

interface GetDocumentByIdProps {
  collectionName: string;
  id: string;
}

const getDocumentById = async ({
  collectionName,
  id,
}: GetDocumentByIdProps) => {
  const docRef = doc(firestore, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export default getDocumentById;
