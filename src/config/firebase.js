import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
<<<<<<< Updated upstream
    apiKey: "AIzaSyBuT4mtw1ZutFJSGD8JqQk1eAJXSELvxkY",
    authDomain: "diamondshopsystem-a44e0.firebaseapp.com",
    projectId: "diamondshopsystem-a44e0",
    storageBucket: "diamondshopsystem-a44e0.appspot.com",
    messagingSenderId: "945382777403",
    appId: "1:945382777403:web:cebfcdec39d33f1b72321e",
    measurementId: "G-WPEF8D1EK0"
=======
    apiKey: "AIzaSyBjIMrZnWG1wuPyqVxyWVWwJFH1U2PD6gs",
    authDomain: "diamondshopsystem-db20e.firebaseapp.com",
    projectId: "diamondshopsystem-db20e",
    storageBucket: "diamondshopsystem-db20e.appspot.com",
    messagingSenderId: "531138061690",
    appId: "1:531138061690:web:cd6d9b72066c765e6862c3",
    measurementId: "G-VCRLLDF8FG"
>>>>>>> Stashed changes
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { app, provider, auth };

