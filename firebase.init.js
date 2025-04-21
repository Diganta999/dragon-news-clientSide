// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATulydzVYkx2pYLoBT4t3Fm5Vjx0Q0QkE",
  authDomain: "dragone-news-firebase.firebaseapp.com",
  projectId: "dragone-news-firebase",
  storageBucket: "dragone-news-firebase.firebasestorage.app",
  messagingSenderId: "627136897600",
  appId: "1:627136897600:web:e816ec8efc4068e7d335a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);