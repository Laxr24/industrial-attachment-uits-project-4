
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQC5yN5Wr5y6O-T7elTLf0OGQC9nj5EL4",
  authDomain: "assignment-8-7c534.firebaseapp.com",
  projectId: "assignment-8-7c534",
  storageBucket: "assignment-8-7c534.appspot.com",
  messagingSenderId: "445033812903",
  appId: "1:445033812903:web:8bf052c91f9b930fb25c82",
  measurementId: "G-HDQEHRZ1CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;