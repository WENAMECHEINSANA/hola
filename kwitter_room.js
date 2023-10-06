const firebaseConfig = {

  apiKey: "AIzaSyA0_PMyYXu30aJ5yB85ijBh0bMxS59EJ9Y",

  authDomain: "kwiteer-9de60.firebaseapp.com",

  projectId: "kwiteer-9de60",

  storageBucket: "kwiteer-9de60.appspot.com",

  messagingSenderId: "255859290269",

  appId: "1:255859290269:web:52bf945eb983d31de12474"

};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
