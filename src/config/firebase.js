// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSNLkSI18Qk2CbK1Atr3GPES63iHPVPOI",
    authDomain: "flock-34f18.firebaseapp.com",
    databaseURL: "https://flock-34f18.firebaseio.com",
    projectId: "flock-34f18",
    storageBucket: "flock-34f18.appspot.com",
    messagingSenderId: "351020217711",
    appId: "1:351020217711:web:3f398a7a4571d5d6e4249a",
    measurementId: "G-TJ4RGXH3CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;