
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-7cad1.firebaseapp.com",
  projectId: "interview-7cad1",
  storageBucket: "interview-7cad1.firebasestorage.app",
  messagingSenderId: "433198515077",
  appId: "1:433198515077:web:c77e4c78f6ad6b47dbbaec"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}