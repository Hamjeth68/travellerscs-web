// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWD91xwirQDGHI8WTCu86qq5uYkzDobX8",
  authDomain: "travellerscs-web-5975e.firebaseapp.com",
  projectId: "travellerscs-web-5975e",
  storageBucket: "travellerscs-web-5975e.appspot.com",
  messagingSenderId: "997781989664",
  appId: "1:997781989664:web:d9ad23a2ee36c1b51fcf45",
  measurementId: "G-GLQH6QTJER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);