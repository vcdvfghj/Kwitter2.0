const firebaseConfig = {
    apiKey: "AIzaSyB7dO5RYlq00Ey0lJxe94I_Qk7EqTc_8ZM",
    authDomain: "kwitter-a49cf.firebaseapp.com",
    databaseURL: "https://kwitter-a49cf-default-rtdb.firebaseio.com",
    projectId: "kwitter-a49cf",
    storageBucket: "kwitter-a49cf.appspot.com",
    messagingSenderId: "580793979236",
    appId: "1:580793979236:web:defef5711fbebcf0adaa71"
  };
  
  firebase.initializeApp(firebaseConfig);

room_name=localStorage.getItem("room_name")
username=localStorage.getItem("name")
username1=username
function getData(message_data) { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id)
    console.log(message_data)
    username=message_data["user"]
    messages=message_data["messages"]
    like=message_data["likes"]
    name_with_tick="<h4>"+username+"<img class='user_tick' src='tick.png'></h4>"
    message_with_tag="<h5 class='message_h4'>"+messages+"<h5>"
    like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick= 'updateLike(this.id)'>"
    span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"
    row=name_with_tick + message_with_tag + like_button + span_tag
    document.getElementById("output").innerHTML+=row
 } });  }); }
getData();
function send(){
    msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push({
        likes:0,
        messages:msg,
        user:username1
    })
    document.getElementById("msg").innerHTML=""
}

function updateLike(message_id)
{
  likes=document.getElementById(message_id).value
  updatedLike=Number(likes)+1
  firebase.database().ref(room_name).child(message_id).update({
    likes:updatedLike
  })
}
function logout(){
    localStorage.removeItem("name")
    localStorage.removeItem("roomEntered")
    window.location="index.html"
}