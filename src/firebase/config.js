import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyBeS90zBkT4pn6QalLPALfcDQAiE-yzpoc",
    authDomain: "firegram-b09e6.firebaseapp.com",
    databaseURL: "https://firegram-b09e6.firebaseio.com",
    projectId: "firegram-b09e6",
    storageBucket: "firegram-b09e6.appspot.com",
    messagingSenderId: "92317556223",
    appId: "1:92317556223:web:970bf11ffc2832d855dbca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };