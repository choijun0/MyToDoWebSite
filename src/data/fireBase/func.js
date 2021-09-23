import { firebaseConfig } from "./apikey"
import { initializeApp } from "firebase/app";
import { 
getAuth, 
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "firebase/auth";

const app = initializeApp(firebaseConfig);

//#.1 Auth 
const authService = getAuth(app);

export const getCurrentUser = () => authService.currentUser;

export const createAccountByEmail = (email, password) => {
  return createUserWithEmailAndPassword(authService, email, password);
}

export const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(authService, email, password);
}

