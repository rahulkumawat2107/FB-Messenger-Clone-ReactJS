import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCSZE94gN-Cf4y6hVC1v24Y3FUP0eOtPiI",
    authDomain: "fb-messenger-clone-52aba.firebaseapp.com",
    projectId: "fb-messenger-clone-52aba",
    storageBucket: "fb-messenger-clone-52aba.appspot.com",
    messagingSenderId: "566372820783",
    appId: "1:566372820783:web:e4fe4ff710038c8002e3da",
    measurementId: "G-MFR1CFDLB8"
});

const db = firebaseApp.firestore();

export default db;