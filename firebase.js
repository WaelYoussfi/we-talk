import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCkHpItT3IYEeCR4mrrCUZisvSgF6Bdr6o",

    authDomain: "connect-me-8d27b.firebaseapp.com",

    projectId: "connect-me-8d27b",

    storageBucket: "connect-me-8d27b.appspot.com",

    messagingSenderId: "486511477203",

    appId: "1:486511477203:web:dcc91ce684a107bff02f26",
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
