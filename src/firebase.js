import { initializeApp } from "firebase/app";
import * as getFireStore from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCsxih410XyIPA2NgZkV0ejIzJzSgQgQg8",
  authDomain: "todolist-b2aef.firebaseapp.com",
  projectId: "todolist-b2aef",
  storageBucket: "todolist-b2aef.appspot.com",
  messagingSenderId: "187135324131",
  appId: "1:187135324131:web:baad8e8d20c14dd1d63ad6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFireStore(app);