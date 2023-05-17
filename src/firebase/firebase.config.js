// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4MO7D7AJswCCjxHeuUJJ48PRx9YYai5w",
  authDomain: "donation-charity-28c41.firebaseapp.com",
  projectId: "donation-charity-28c41",
  storageBucket: "donation-charity-28c41.appspot.com",
  messagingSenderId: "335150358321",
  appId: "1:335150358321:web:81d818390fed3fd9951a10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;