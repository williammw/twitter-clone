import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyADrBCYgpW8CjeoJMbIs_V7Fg1yo1XnZ28",
  authDomain: "twitter-clone-7b356.firebaseapp.com",
  databaseURL: "https://twitter-clone-7b356.firebaseio.com",
  projectId: "twitter-clone-7b356",
  storageBucket: "twitter-clone-7b356.appspot.com",
  messagingSenderId: "271321809503",
  appId: "1:271321809503:web:67f9dadab06692f42851ea",
  measurementId: "G-255KYDHFK1"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;