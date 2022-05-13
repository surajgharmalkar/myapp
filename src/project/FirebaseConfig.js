
import { getDatabase } from "firebase/database";
import {getAuth} from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwZfeglWBlZ7Ap2JjgBg-BtcWtXsqWJuA",
  authDomain: "yourmart-9d9c4.firebaseapp.com",
  projectId: "yourmart-9d9c4",
  storageBucket: "yourmart-9d9c4.appspot.com",
  messagingSenderId: "222748702710",
  appId: "1:222748702710:web:b665b409328eeda9f279d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const database = getDatabase(app);
 export const auth = getAuth();