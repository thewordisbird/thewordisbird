// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwazBE3oB-CR6RWzTD9raLIFbz6XuIjek",
  authDomain: "thewordisbird-2432e.firebaseapp.com",
  projectId: "thewordisbird-2432e",
  storageBucket: "thewordisbird-2432e.appspot.com",
  messagingSenderId: "971419205649",
  appId: "1:971419205649:web:778a1c149ce38915a6b1b0",
  measurementId: "G-XDWKW7Y8KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
