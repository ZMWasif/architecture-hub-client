// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ7Bio2kxB95HoQRDT03s3XNc4VyjjrNc",
  authDomain: "archub-client.firebaseapp.com",
  projectId: "archub-client",
  storageBucket: "archub-client.appspot.com",
  messagingSenderId: "809886882378",
  appId: "1:809886882378:web:f7674697cbaa366aeb64b3",
  measurementId: "G-KGK33WZ0BZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
/* const analytics = getAnalytics(app); */

export default auth;
