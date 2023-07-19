// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlzJabzCvzrnLSrg4zv6vNfdtPuWZ2zQo",
  authDomain: "smartbag-32648.firebaseapp.com",
  projectId: "smartbag-32648",
  storageBucket: "smartbag-32648.appspot.com",
  messagingSenderId: "1061281580258",
  appId: "1:1061281580258:web:ceab821760fffa58b48abb",
  measurementId: "G-BGL377P7W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)           
export const storage=getStorage(app)           