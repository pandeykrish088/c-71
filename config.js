import firebase from 'firebase';
require( '@firebase/firestore')



const firebaseConfig = {
    apiKey: "AIzaSyDZIuPGd8q_JkRfFD7-psVbJKNw-3bwuvM",
    authDomain: "bh-56-k.firebaseapp.com",
    projectId: "bh-56-k",
    storageBucket: "bh-56-k.appspot.com",
    messagingSenderId: "1073234832509",
    appId: "1:1073234832509:web:a1f8e540060702966ad514"
  };


  if (!firebase.apps.length){ 
      firebase.initializeApp(firebaseConfig); 
    }
      
 export default firebase.firestore();