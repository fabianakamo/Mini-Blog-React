import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrdNNodUh1SjLf0GqHV1QF3bl-7urUMoE",
  authDomain: "miniblog-f9893.firebaseapp.com",
  projectId: "miniblog-f9893",
  storageBucket: "miniblog-f9893.appspot.com",
  messagingSenderId: "559842346539",
  appId: "1:559842346539:web:dfa67d6334a0bca660cc6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
