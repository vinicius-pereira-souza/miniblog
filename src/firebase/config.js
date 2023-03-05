import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnTvr9Rw4-7Tidr3tNletpRD8xFfY0EzI",
  authDomain: "miniblog-33f1c.firebaseapp.com",
  projectId: "miniblog-33f1c",
  storageBucket: "miniblog-33f1c.appspot.com",
  messagingSenderId: "905976842183",
  appId: "1:905976842183:web:217ead377d4925d9477be2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
