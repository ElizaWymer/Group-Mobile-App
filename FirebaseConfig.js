import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD-A520LGUZ-YehxO6T3_BDw32rnRHTBI",
  authDomain: "huddunigroupproject1.firebaseapp.com",
  projectId: "huddunigroupproject1",
  storageBucket: "huddunigroupproject1.appspot.com",
  messagingSenderId: "708749028971",
  appId: "1:708749028971:web:0768d62685898fd4f14b2e",
  measurementId: "G-JKL8D4ZJ5T"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);