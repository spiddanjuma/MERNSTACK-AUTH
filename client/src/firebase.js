// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_KEY ,
  authDomain: "mern-auth-1994.firebaseapp.com",
  projectId: "mern-auth-1994",
  storageBucket: "mern-auth-1994.appspot.com",
  messagingSenderId: "415759252795",
  appId: "1:415759252795:web:b027eb8e2400a91f36cb1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);