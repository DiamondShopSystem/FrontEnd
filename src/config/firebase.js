import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCmHYTbP2FUTxXMZcQIJmGke6twQoyP_7k",
    authDomain: "otptest-72b56.firebaseapp.com",
    projectId: "otptest-72b56",
    storageBucket: "otptest-72b56.appspot.com",
    messagingSenderId: "766169417736",
    appId: "1:766169417736:web:d408841a7e9aa55029e9bd",
    measurementId: "G-0T6FDBM61P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { app, provider };

