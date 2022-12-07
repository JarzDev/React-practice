
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHlYvpvCvcMHTyn3OG5FBHB3hBxIPksF4",
  authDomain: "serviciosmart-5a02d.firebaseapp.com",
  projectId: "serviciosmart-5a02d",
  storageBucket: "serviciosmart-5a02d.appspot.com",
  messagingSenderId: "380176989533",
  appId: "1:380176989533:web:0569bbaeddaf5a6c543cb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);