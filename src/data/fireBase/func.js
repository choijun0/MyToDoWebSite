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

export const addDocumentToCollection = (collectionName, data) =>{
  return addDoc(collection(database, collectionName), data);
}

export const getDataFromCollection = (collectionName) => {
  return getDocs(collection(database, collectionName));
}

export const watchDataBase = (collectionName, callback) => {
  const unsub = onSnapshot(collection(database, collectionName), (snapShot) => {
    if(callback) {
      callback(snapShot);
    }
  });
}

export const deleteDocumentById = (collectionName, documentName) => {
  console.log(collectionName, documentName);
  return deleteDoc(doc(database, collectionName, documentName));
}

export const updateDocumentById = (collectionName, documentName, data) => {
  console.log(collectionName, documentName, data);
  return updateDoc(doc(database, collectionName, documentName), data);
}

export const getDocumentByQuery = (collectionName, prop, operator, condition) => {
  const q = query(collection(database, collectionName), where(prop, operator, condition));
  return getDocs(q);
}
