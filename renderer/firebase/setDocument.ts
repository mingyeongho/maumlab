import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "./firebase";

interface setDocProps {
  collectionName: string;
  documentName: string;
  fields: any;
}

interface addDocProps {
  collectionName: string;
  fields: any;
}

interface updateDocProps {
  collectionName: string;
  documentName: string;
  updateFields: {};
}

/**
 * 문서 추가 함수 (단일 문서를 만들거나 덮어쓰는 목적)
 *
 * 문서 이름을 지정해주는 경우
 */
export const setDocument = async ({
  collectionName,
  documentName,
  fields,
}: setDocProps) => {
  await setDoc(doc(firestore, collectionName, documentName), fields);
};

/**
 * 문서 추가 함수
 *
 * 문서 이름을 지정하지 않는 경우
 */
export const addDocument = async ({ collectionName, fields }: addDocProps) => {
  await addDoc(collection(firestore, collectionName), fields);
};

/**
 * 전체 문서를 덮어쓰지 않고 문서의 일부 필드를 업데이
 */
export const updateDocument = async ({
  collectionName,
  documentName,
  updateFields,
}: updateDocProps) => {
  await updateDoc(doc(firestore, collectionName, documentName), updateFields);
};
