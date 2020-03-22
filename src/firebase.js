import firebase from "firebase";
import {firebaseKey} from './keys.js';

// Initialize Firebase
const firebaseConfig = {
    apiKey: `${firebaseKey}`,
    authDomain: "jym-the-app-4f14a.firebaseapp.com",
    databaseURL: "https://jym-the-app-4f14a.firebaseio.com",
    projectId: "jym-the-app-4f14a",
    storageBucket: "jym-the-app-4f14a.appspot.com",
    messagingSenderId: "280569083402",
    appId: "1:280569083402:web:dc2e6b529c3ecc5b3051f3",
    measurementId: "G-ZJP4H7W14B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();

//updates firestore settings
db.settings({ timestampsInSnapshots: true});


auth.onAuthStateChanged(user => {
    console.log("This is the current state of the user!: ", user)
});

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();

export {
  database,
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
  db
};
