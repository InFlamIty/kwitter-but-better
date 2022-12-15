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
room_name = localStorage.getItem("roomName")
function send()
{
  msg = document.getElementById("message").value
  firebase.database().ref(room_name).push({
        name: userName , message: msg , like: 0
  })
  document.getElementById("message").value = ""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name = message_data['name']
message = message_data['message']
like = message_data['like']
name_with_tag = "<h4>"+name+"<img class = 'user_tick' src = 'check.png'></h4>"
message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>"
like_button = "<button class = 'btn btn-warning' id ="+firebase_message_id+" value="+like+" onclick = 'updateLike(this.id)'>"
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button>"
row = name_with_tag + message_with_tag + like_button +span_with_tag
document.getElementById("output").innerHTML += row
//End code
  } });  }); }
getData();
function logout()
{
  localStorage.removeItem("roomName")
  localStorage.removeItem("userName")
  window.location = "index.html"
}
function updateLike(message_id)
{
      console.log("clicked on like button - "+message_id)
      button_id = message_id
      likes = document.getElementById(button_id).value
      updated_likes = Number(likes) + 1
      console.log(updated_likes)
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      })
}
