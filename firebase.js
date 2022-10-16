// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfW4q7w_z_aexgn8niu4xpQ2pDiX-y5b0",
  authDomain: "toyama4-e9654.firebaseapp.com",
  projectId: "toyama4-e9654",
  storageBucket: "toyama4-e9654.appspot.com",
  messagingSenderId: "475185634258",
  appId: "1:475185634258:web:3d7b249328d2b96152060b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };