import firebase from './firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAm5bnX33RqKatfrujAYSypyLaSZp4KGlA",
    authDomain: "clone-49779.firebaseapp.com",
    projectId: "clone-49779",
    storageBucket: "clone-49779.appspot.com",
    messagingSenderId: "210888309394",
    appId: "1:210888309394:web:9b2551c3bf32c8e7bac44b",
    measurementId: "G-4C8YT7KZJ6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };