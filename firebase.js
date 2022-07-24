import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCw7L24L9DnfUuyJ8Nccmeud6bSAiWGVaM",
  authDomain: "scoops-6b1da.firebaseapp.com",
  projectId: "scoops-6b1da",
  storageBucket: "scoops-6b1da.appspot.com",
  messagingSenderId: "240532445850",
  appId: "1:240532445850:web:411c82a044e58f6a0fdd23",
  measurementId: "G-1LGWMC8P61"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;