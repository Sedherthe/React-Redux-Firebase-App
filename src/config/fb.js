import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCmFX0lhIZPBR3DM4E85S4bKjqjyLx-qh4",
  authDomain: "marioplan-e9ab1.firebaseapp.com",
  databaseURL: "https://marioplan-e9ab1.firebaseio.com",
  projectId: "marioplan-e9ab1",
  storageBucket: "marioplan-e9ab1.appspot.com",
  messagingSenderId: "124824066890",
  appId: "1:124824066890:web:61bc1d140ba2dbea937fb3",
  measurementId: "G-JED5KSB3WW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;