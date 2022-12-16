// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAK6IbPFWnqRMxfvEjYt7IWhUGKb3l10k",
  authDomain: "house-marketplace-a61d8.firebaseapp.com",
  projectId: "house-marketplace-a61d8",
  storageBucket: "house-marketplace-a61d8.appspot.com",
  messagingSenderId: "438684344997",
  appId: "1:438684344997:web:e247a564f13624e025e34c",
  measurementId: "G-7592FHL0P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =  getFirestore();