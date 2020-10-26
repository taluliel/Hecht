import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD-civ7gqDICEZAlqlGwk1sd9K_ZIdqxQs",
    authDomain: "hechtmuseum-2021.firebaseapp.com",
    databaseURL: "https://hechtmuseum-2021.firebaseio.com",
    projectId: "hechtmuseum-2021",
    storageBucket: "hechtmuseum-2021.appspot.com",
    messagingSenderId: "326804721506",
    appId: "1:326804721506:web:8036d750bee65886c8a63b",
    measurementId: "G-TL7KC7BPET"
  };
  // Initialize Firebase
  
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  var db = firebase.firestore();
   var rooms = db.collection('rooms')
    var items=[];
 

//get all data
        rooms.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            items[doc.name, " => ", doc.data()];
        });
    })

    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
       