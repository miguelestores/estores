import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyB1VzjKRMzGiXFEHWO97nU-gIeZWW6KfpA",
    authDomain: "crud-og.firebaseapp.com",
    projectId: "crud-og",
    storageBucket: "crud-og.appspot.com",
    messagingSenderId: "273530776752",
    appId: "1:273530776752:web:3cb7b8e32b71928f519f75"
  };

  
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();