var firebaseConfig = {
    apiKey: "AIzaSyAuf9gtVc2GcEs-G559jN3EH0-ISKEHKsw",
    authDomain: "practice-activity-ce268.firebaseapp.com",
    databaseURL: "https://practice-activity-ce268-default-rtdb.firebaseio.com",
    projectId: "practice-activity-ce268",
    storageBucket: "practice-activity-ce268.appspot.com",
    messagingSenderId: "898671123582",
    appId: "1:898671123582:web:45f0076cdeb2dda4478c2f"
  };
firebase.initializeApp(firebaseConfig);
function addUser() {
var username=document.getElementById("user_name").value;
firebase.database().ref("/").child(username).update({
    purpose:"addUsername"
});
}