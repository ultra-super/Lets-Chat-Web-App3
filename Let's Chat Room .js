
const firebaseConfig = { apiKey: "AIzaSyBrEYCJxBqnZbm46m57TGsQngVBPxCxIBw", authDomain: "kwitter-ba8cc.firebaseapp.com", databaseURL: "https://kwitter-ba8cc-default-rtdb.firebaseio.com", projectId: "kwitter-ba8cc", storageBucket: "kwitter-ba8cc.appspot.com", messagingSenderId: "911164873756", appId: "1:911164873756:web:a9116c0e37a62666d213d9", measurementId: "G-2P9GWCTDZS" };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
        //Start code
console.log("Room Name -"+ Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
