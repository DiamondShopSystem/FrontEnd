import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAZQBam_Sz_YshAKTTaxiM90QtwogTGyoE",
    authDomain: "otp-app-demo-db036.firebaseapp.com",
    projectId: "otp-app-demo-db036",
    storageBucket: "otp-app-demo-db036.appspot.com",
    messagingSenderId: "87124442927",
    appId: "1:87124442927:web:1167f1c83b3017b3136bda",
    measurementId: "G-E8N86T7JF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export  {app, provider };

