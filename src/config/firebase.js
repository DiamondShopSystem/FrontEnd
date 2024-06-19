import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBuT4mtw1ZutFJSGD8JqQk1eAJXSELvxkY",
    authDomain: "diamondshopsystem-a44e0.firebaseapp.com",
    projectId: "diamondshopsystem-a44e0",
    storageBucket: "diamondshopsystem-a44e0.appspot.com",
    messagingSenderId: "945382777403",
    appId: "1:945382777403:web:cebfcdec39d33f1b72321e",
    measurementId: "G-WPEF8D1EK0"

}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { app, provider, auth };

