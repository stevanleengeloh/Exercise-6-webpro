import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBTs8rwIjvMXuzzDDD0DyK2lUouec9Bc8",
    authDomain: "webpro-862ae.firebaseapp.com",
    databaseURL: "https://webpro-862ae-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "webpro-862ae",
    storageBucket: "webpro-862ae.appspot.com",
    messagingSenderId: "904393678638",
    appId: "1:904393678638:web:98d11b61c6e6b055fc64bf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;