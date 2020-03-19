import firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDlfcfX5KAzUMXoxl3MUG_CTHUCOFiCB0Q",
  authDomain: "jym-the-app.firebaseapp.com",
  databaseURL: "https://jym-the-app.firebaseio.com",
  projectId: "jym-the-app",
  storageBucket: "jym-the-app.appspot.com",
  messagingSenderId: "1081796670448",
  appId: "1:1081796670448:web:fb37022c8699fe70a36335",
  measurementId: "G-K8B6NHHJF1"
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
