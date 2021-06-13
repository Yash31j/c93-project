var firebaseConfig = {
    apiKey: "AIzaSyCSw-2pMs1HsHsn9_Y_wjmRXUYk-TNDfNw",
    authDomain: "medi-chat-1e74e.firebaseapp.com",
    databaseURL: "https://medi-chat-1e74e-default-rtdb.firebaseio.com",
    projectId: "medi-chat-1e74e",
    storageBucket: "medi-chat-1e74e.appspot.com",
    messagingSenderId: "123731311588",
    appId: "1:123731311588:web:4c8768b65b0d119456a5f1",
    measurementId: "G-EM67SHQ4WH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
