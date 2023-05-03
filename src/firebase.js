import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCSzTfBLCBFdACOYq-frVNs2N5ewxs_Uy0",
  authDomain: "estores-p.firebaseapp.com",
  projectId: "estores-p",
  storageBucket: "estores-p.appspot.com",
  messagingSenderId: "426934445505",
  appId: "1:426934445505:web:896602521ca51bd193bb40"
};


  
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();