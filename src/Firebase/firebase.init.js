// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsxQXd3Ykbk2WInlRbwqToxqxo_6BiIbE",
  authDomain: "dragon-news-429fe.firebaseapp.com",
  projectId: "dragon-news-429fe",
  storageBucket: "dragon-news-429fe.firebasestorage.app",
  messagingSenderId: "290574595165",
  appId: "1:290574595165:web:d077506c27ed9c7b8c49b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 // Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);