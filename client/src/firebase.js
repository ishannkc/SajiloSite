// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sajilosite-f7d45.firebaseapp.com",
  projectId: "sajilosite-f7d45",
  storageBucket: "sajilosite-f7d45.firebasestorage.app",
  messagingSenderId: "78257554804",
  appId: "1:78257554804:web:a9e598215cccf1cfc11821",
  measurementId: "G-3VYBCES04Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider= new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export {auth,provider}