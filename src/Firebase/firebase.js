import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW2ZsSojCl7nvjAz4QxgMO2MCmALTPNd4",
  authDomain: "giphy-app-3f0d3.firebaseapp.com",
  databaseURL: "https://giphy-app-3f0d3.firebaseio.com",
  projectId: "giphy-app-3f0d3",
  storageBucket: "giphy-app-3f0d3.appspot.com",
  messagingSenderId: "71936340101",
  appId: "1:71936340101:web:b6e24d7396f0789e50f9ec",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
