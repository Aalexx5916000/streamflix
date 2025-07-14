import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCfwOdaQKVqWVVuXrYkJBFUV8y4kiIWtA",
  authDomain: "streamflix-bae58.firebaseapp.com",
  projectId: "streamflix-bae58",
  storageBucket: "streamflix-bae58.firebasestorage.app",
  messagingSenderId: "363525652260",
  appId: "1:363525652260:web:c2d45dfd4e6a1313557db1",
  measurementId: "G-64MDRWHHKR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);