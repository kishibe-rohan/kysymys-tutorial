import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBP9Mfl4Xw77x6W1pk_fszTHuB3VbS0-pk",
  authDomain: "kysymys-30d6c.firebaseapp.com",
  projectId: "kysymys-30d6c",
  storageBucket: "kysymys-30d6c.appspot.com",
  messagingSenderId: "956637545295",
  appId: "1:956637545295:web:ca9698170c24bc25cbbb3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
