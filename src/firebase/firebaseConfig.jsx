import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDeidc3jsqiOorXmh7zMrpNTSWcDCoPiDs",
    authDomain: "viveysueltacalace.firebaseapp.com",
    projectId: "viveysueltacalace",
    storageBucket: "viveysueltacalace.appspot.com",
    messagingSenderId: "1040486631826",
    appId: "1:1040486631826:web:907613572d1606746c994b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

