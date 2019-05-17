import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBPY21okPDmzAB3emU1aW5NANlly6ZdjPU",
    authDomain: "db-project-eb3cc.firebaseapp.com",
    databaseURL: "https://db-project-eb3cc.firebaseio.com",
    projectId: "db-project-eb3cc",
    storageBucket: "db-project-eb3cc.appspot.com",
    messagingSenderId: "768821556585",
    appId: "1:768821556585:web:99147dc6bfe4e40c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase