import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { firebaseAuth, firestore } from "../../../firebase/firebase";

type User = {
  email: string;
  nickname: string;
  uid: string;
};

const useHome = () => {
  return {};
};

export default useHome;
