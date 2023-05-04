// Import the functions you need from the SDKs you need
import { defaults } from "autoprefixer";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpFYpNe_KrtBFVmQ4xDytSNyRkYmHLb4M",
  authDomain: "chef-recipe-98998.firebaseapp.com",
  projectId: "chef-recipe-98998",
  storageBucket: "chef-recipe-98998.appspot.com",
  messagingSenderId: "820821027703",
  appId: "1:820821027703:web:824cdc03c80b4282a4cf72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;