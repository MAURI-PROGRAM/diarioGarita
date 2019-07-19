import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBq7sVqzgKWQ8TbE77AAubutAdMHq4_cks",
  authDomain: "diariogarita.firebaseapp.com",
  projectId: "diariogarita"
});

let db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
