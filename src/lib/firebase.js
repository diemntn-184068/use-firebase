import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTlGtPL7JEfC48MwR4uq_XJuD80g7ssNo",
  authDomain: "fir-sample-eb1e3.firebaseapp.com",
  projectId: "fir-sample-eb1e3",
  storageBucket: "fir-sample-eb1e3.appspot.com",
  messagingSenderId: "389871433838",
  appId: "1:389871433838:web:3b4a3023fc2970bd3c4e7f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);