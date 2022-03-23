import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBr_NxuCSENXpx62vj6CpM0KI2vcQNhvkQ",
    authDomain: "complaint-forum-295a9.firebaseapp.com",
    projectId: "complaint-forum-295a9",
    storageBucket: "complaint-forum-295a9.appspot.com",
    messagingSenderId: "1183726092",
    appId: "1:1183726092:web:80b2ae45c9530410514c29"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
