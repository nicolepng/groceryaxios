import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCwDI5j0fkUwnx-VoOJR6DWglKbhBEugIY",
  authDomain: "discovery-16619.firebaseapp.com",
  databaseURL: "https://discovery-16619.firebaseio.com",
  projectId: "discovery-16619",
  storageBucket: "discovery-16619.appspot.com",
  messagingSenderId: "553262723938",
  appId: "1:553262723938:web:5a9c61013a7bd7c322b23b",
  measurementId: "G-904LTFP4HW"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;