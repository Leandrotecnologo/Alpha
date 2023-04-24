import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLIs1FPQbiwe_ZNjOQBoKGCa_AXuqgoAw",
    authDomain: "alpha-37564.firebaseapp.com",
    projectId: "alpha-37564",
    storageBucket: "alpha-37564.appspot.com",
    messagingSenderId: "165253510258",
    appId: "1:165253510258:web:545f0b909c24831bbdfeeb"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);