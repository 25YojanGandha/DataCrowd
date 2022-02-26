import  firebase  from "firebase/compat/app";
import firestore from "firebase/compat/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyBoUFbaPflWkJYRAvTr6sclLtV3rZIo67A",
 authDomain: "table-afb57.firebaseapp.com",
 databaseURL: "https://table-afb57-default-rtdb.firebaseio.com",
 projectId: "table-afb57",
 storageBucket: "table-afb57.appspot.com",
 messagingSenderId: "1004079237364",
 appId: "1:1004079237364:web:061b105f5bba9679a536a1"
};

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()