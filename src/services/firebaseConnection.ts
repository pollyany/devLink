import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp7z8dxibsxd1cUtsL6gfQzhFy-m7TU1Y",
  authDomain: "reactlinks-9ca9a.firebaseapp.com",
  projectId: "reactlinks-9ca9a",
  storageBucket: "reactlinks-9ca9a.appspot.com",
  messagingSenderId: "411331239821",
  appId: "1:411331239821:web:0c3e257fb10ece593527c4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };