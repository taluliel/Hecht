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
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();


const createThing = document.getElementById('createThing');
const thingsList = document.getElementById('thingsList');


let thingsRef;
let unsubscribe;


        // Database Reference
        thingsRef = db.collection('rooms')
        

        createThing.onclick = () => {
//add data
            // thingsRef.doc("rt6kNdxGE4FWBD1ucYoF").set({
            //     name: "San Francisco" });
                
            //add document with generated id
            thingsRef.add({
                    name: "Tokyo",
                 })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
          
        }

    //get data
        var docRef = db.collection("rooms").doc("rt6kNdxGE4FWBD1ucYoF");
        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

//get all data
        thingsRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.name, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
        