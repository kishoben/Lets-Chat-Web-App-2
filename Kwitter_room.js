//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBhvJ0aajIS4iela9mtexZgzG0yR7QQyZY",
    authDomain: "practice-3675c.firebaseapp.com",
    databaseURL: "https://practice-3675c-default-rtdb.firebaseio.com",
    projectId: "practice-3675c",
    storageBucket: "practice-3675c.appspot.com",
    messagingSenderId: "1026600936807",
    appId: "1:1026600936807:web:7cc0aaeafc3dc037067bc2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();