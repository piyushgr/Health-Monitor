var firebaseConfig = {
  apiKey: "AIzaSyAx2yCUf8X14sXTUiyfxbCXesN66EaOkAs",
  authDomain: "it07-966b9.firebaseapp.com",
  databaseURL: "https://it07-966b9-default-rtdb.firebaseio.com",
  projectId: "it07-966b9",
  storageBucket: "it07-966b9.appspot.com",
  messagingSenderId: "719926723624",
  appId: "1:719926723624:web:2af3cf293734c5c797e11d",
  measurementId: "G-6DH6H9FKRL"
};
firebase.initializeApp(firebaseConfig);
// const fs = require('fs');
let heartval=0;
var database = firebase.database();
var ref = database.ref("test");
let heart=document.getElementById('heart');
ref.on("value", function(snapshot) {
  // setInterval(() => {
    heartval=snapshot.val();    
    heart.innerHTML=heartval['a'];
    var one=heartval['a'];
    let readMe=one;
    // module.exports(one);
    fs.writeFileSync('writeMe.txt', readMe);
    // }, 3000);
    // alert(snapshot.val()['a']);
    console.log(snapshot.val());
    // alert(heart.outerHTML);
  }, function(error) {
    console.log("Error: " + error.code);
  });



