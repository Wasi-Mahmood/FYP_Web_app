// Import the functions you need from the SDKs you need
import  { initializeApp  } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyDSpQ6nnR6IH0CPTsQAIkJOs3HUuSRpnJE",
  authDomain: "fir-fyploginsignup.firebaseapp.com",
  projectId: "fir-fyploginsignup",
  storageBucket: "fir-fyploginsignup.appspot.com",
  messagingSenderId: "715441614455",
  appId: "1:715441614455:web:6db3cd76e3566c1c156072",
  measurementId: "G-5XLKH59EBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =  getAuth();
const db = getFirestore(app)




export {auth,db};