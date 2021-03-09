/**
 * firebase configuration, do not change this
 */

/**
 * Firebase import
 * ***************
 * firebase app, 
 * firebase auth, 
 * firebase firestore
 */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA0SUP_H0du--zIuSgmrUmalhLd6mawSOY",
    authDomain: "intellispeechscis.firebaseapp.com",
    projectId: "intellispeechscis",
    storageBucket: "intellispeechscis.appspot.com",
    messagingSenderId: "1036994092149",
    appId: "1:1036994092149:web:4e0423c76c1c46bcb0ac3c",
    measurementId: "G-5BQ1GQRGLB"
  };
firebase.initializeApp(firebaseConfig);
// console.log(firebase.analytics());
const storage = firebase.storage();
export default storage;

