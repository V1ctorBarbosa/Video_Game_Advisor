import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import { getFirestore } from "firebase/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyDONDvNgWyTlGPw6WkNgMOuXLClbDot11Y",
    authDomain: "vgadvisor-generator.firebaseapp.com",
    projectId: "vgadvisor-generator",
    storageBucket: "vgadvisor-generator.appspot.com",
    messagingSenderId: "467657050955",
    appId: "1:467657050955:web:619b7b48e6f014cf9536ce",
    measurementId: "G-5VB3KR05RF"
  };

 

//init firebase
const app = firebase.initializeApp(firebaseConfig)

//init Database
const db = getFirestore()

//Firestore
const firestore = firebase.firestore()

//Storage
const storage = firebase.storage()

export {firestore, storage, app, db}