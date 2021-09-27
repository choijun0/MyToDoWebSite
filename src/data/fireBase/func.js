import { firebaseConfig } from "./apikey"
import { initializeApp } from "firebase/app";
import { 
getAuth, 
createUserWithEmailAndPassword, 
signInWithEmailAndPassword,
signInWithPopup,
GoogleAuthProvider,
GithubAuthProvider,
updateProfile
} from "firebase/auth";

import { 
getFirestore,
setDoc, 
addDoc, 
getDocs, 
collection, 
doc, 
onSnapshot, 
query,
updateDoc, 
deleteField, 
deleteDoc,
where 
} from "firebase/firestore"

import {
getStorage, 
ref, 
uploadString, 
getDownloadURL,
deleteObject
} from "firebase/storage"
const app = initializeApp(firebaseConfig);

//#.1 Auth 
export const authService = getAuth(app);

export const getCurrentUser = () => authService.currentUser;

export const createAccountByEmail = (email, password) => {
  return createUserWithEmailAndPassword(authService, email, password);
}

export const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(authService, email, password);
}

//#.2 FireStore
const database = getFirestore(app); 

export const setDocumentToCollection = (colId, docId, data) =>{
  return setDoc(doc(database, colId, docId), data);
}

export const addDocumentToCollection = (colId, data) =>{
  return addDoc(collection(database, colId), data);

}

export const getDataFromCollection = (colId) => {
  return getDocs(collection(database, colId));
}

export const watchDataBase = (colId, callback) => {
  const unsub = onSnapshot(collection(database, colId), (snapShot) => {
    if(callback) {
      callback(snapShot);
    }
  });
}

export const deleteDocumentById = (colId, docId) => {
  return deleteDoc(doc(database, colId, docId));
}

export const updateDocumentById = (colId, docId, data) => {
  return updateDoc(doc(database, colId, docId), data);
}

export const getDocumentByQuery = (colId, prop, operator, condition) => {
  const q = query(collection(database, colId), where(prop, operator, condition));
  return getDocs(q);
}
