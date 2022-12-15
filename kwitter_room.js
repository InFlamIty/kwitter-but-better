var firebaseConfig = {
    apiKey: "AIzaSyC-pExsidvSszHtMOY-5Z8qL-vzkOP7cxM",
    authDomain: "my-kwitter-79727.firebaseapp.com",
    databaseURL: "https://my-kwitter-79727-default-rtdb.firebaseio.com",
    projectId: "my-kwitter-79727",
    storageBucket: "my-kwitter-79727.appspot.com",
    messagingSenderId: "695315657970",
    appId: "1:695315657970:web:5944468fe10f25738d0c6b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var userName = localStorage.getItem("userName")
  document.getElementById("user_name").innerHTML = "Welcome " + userName + " !"
  function addRoom()
  {
    roomName = document.getElementById("room_name").value
    firebase.database().ref("/").child(roomName).update({
          purpose: "adding room name"
    })
    localStorage.setItem("roomName" , roomName)
    window.location = "kwitter_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(Room_names)
    row = "<div class = 'room_name' id = '" + Room_names + "' onclick = 'redirectRoom(this.id)'>" + Room_names + "</div> <hr>"
    document.getElementById("output").innerHTML+=row 
    //End code
    });});}
getData();
function redirectRoom(name)
{
    console.log(name)
    localStorage.setItem("roomName" , name)
    window.location = "kwitter_page.html"
}
function logOut()
{
  localStorage.removeItem("roomName")
      localStorage.removeItem("userName")
      window.location = "index.html"
}
