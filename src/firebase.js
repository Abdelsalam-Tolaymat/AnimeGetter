import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBj49KbocryPekZ-fUY47STQXqP-VtTNgw",
    authDomain: "animegetter0.firebaseapp.com",
    projectId: "animegetter0",
    storageBucket: "animegetter0.appspot.com",
    messagingSenderId: "83622700860",
    appId: "1:83622700860:web:7f4c3e66b7ef2fe9eea039"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebaseApp.storage().ref()
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
export {db, auth, storage}