// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCpy108k0CxIhtnLHOj12fVxWymLeT57E",
  authDomain: "smart-health-care-9f4ac.firebaseapp.com",
  databaseURL: "https://smart-health-care-9f4ac-default-rtdb.firebaseio.com",
  projectId: "smart-health-care-9f4ac",
  storageBucket: "smart-health-care-9f4ac.appspot.com",
  messagingSenderId: "1066777942796",
  appId: "1:1066777942796:web:cc9eb656d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database reference
var database = firebase.database();

// Live data listener
database.ref("healthData").on("value", function(snapshot) {
  var data = snapshot.val();

  if (data) {
    document.getElementById("heart").innerText = data.heartRate;
    document.getElementById("spo2").innerText = data.spo2;
    document.getElementById("temp").innerText = data.temperature;
  }
});
