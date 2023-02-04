import {
  collection,
  doc,
  FieldPath,
  getDoc,
  getDocs,
  query,
  where,
  WhereFilterOp,
} from "firebase/firestore";
import { firestore } from "./firebase";

interface getDocumentProps {
  collectionName: string;
  documentName: string;
}

interface getDocumentsProps {
  collectionName: string;
}

/**
 * @param fieldPath — The path to compare
 *
 * @param opStr
 * The operation string (e.g "<", "<=", "==", "<", "<=", "!=").
 *
 * @param value — The value for comparison
 */
interface getDocumentsByIdProps {
  collectionName: string;
  whereValue: {
    fieldPath: string | FieldPath;
    opStr: WhereFilterOp;
    value: unknown;
  };
}

export const getDocument = async ({
  collectionName,
  documentName,
}: getDocumentProps) => {
  const docSnap = await getDoc(doc(firestore, collectionName, documentName));

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

/**
 * 한 컬렉션 안에 있는 모든 문서를 검색
 */
export const getDocuments = async ({ collectionName }: getDocumentsProps) => {
  return await getDocs(collection(firestore, collectionName));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
};

/**
 * 한 컬렉션에서 조건에 만족하는 특정 문서들 가져오기
 */
export const getDocumentsById = async ({
  collectionName,
  whereValue,
}: getDocumentsByIdProps) => {
  const { fieldPath, opStr, value } = whereValue;
  const q = query(
    collection(firestore, collectionName),
    where(fieldPath, opStr, value)
  );

  return await getDocs(q);
};
