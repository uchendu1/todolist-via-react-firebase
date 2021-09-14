


import  * as Firebase  from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCglEvnWMgqm3qgajQuMWmpA1EdbwTLrRg",
  authDomain: "todolist-app-de21a.firebaseapp.com",
  projectId: "todolist-app-de21a",
  dbUrl: "https://todolist-app-de21a-default-rtdb.firebaseio.com/",
  storageBucket: "todolist-app-de21a.appspot.com",
  messagingSenderId: "846287216",
  appId: "1:846287216:web:9467be23da30a6fcf6ffb5"
};

// Initialize Firebase
 Firebase.initializeApp(firebaseConfig);


export default Firebase;





// const dbUrl = "https://todolist-app-de21a-default-rtdb.firebaseio.com/"
