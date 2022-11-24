// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA_t61OKeHhRB80_dHtF1Ohg-KpEJJpzQ",
    authDomain: "assignment-12-the-final-proj.firebaseapp.com",
    projectId: "assignment-12-the-final-proj",
    storageBucket: "assignment-12-the-final-proj.appspot.com",
    messagingSenderId: "416789960833",
    appId: "1:416789960833:web:dcbc61cd605f9e4b281580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;