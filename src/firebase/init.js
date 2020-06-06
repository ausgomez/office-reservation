/* this is the initialization file for firbase configuration */
import firebase from "firebase";
//import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAZM5EbdOg8_3hKr9aROdHr5gjGfbdGgH4",
  authDomain: "office-reservation.firebaseapp.com",
  databaseURL: "https://office-reservation.firebaseio.com",
  projectId: "office-reservation",
  storageBucket: "office-reservation.appspot.com",
  messagingSenderId: "808142664741",
  appId: "1:808142664741:web:025380c257c2424d39bbcc",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
