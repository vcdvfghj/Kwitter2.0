const firebaseConfig = {
      apiKey: "AIzaSyB7dO5RYlq00Ey0lJxe94I_Qk7EqTc_8ZM",
      authDomain: "kwitter-a49cf.firebaseapp.com",
      databaseURL: "https://kwitter-a49cf-default-rtdb.firebaseio.com",
      projectId: "kwitter-a49cf",
      storageBucket: "kwitter-a49cf.appspot.com",
      messagingSenderId: "580793979236",
      appId: "1:580793979236:web:defef5711fbebcf0adaa71"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("name")
document.getElementById("usernamelabel").innerHTML= "Welcome "+username

function addRoom()
{
   roomname=document.getElementById("addroom").value
   firebase.database().ref("/").child(roomname).update({
      purpose: "addRoom"
   })
   localStorage.setItem("room_name",roomname)
   window.location="kwitter_message.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trendingrooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Rooms:" + Room_names)
       row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>"
       document.getElementById("trendingrooms").innerHTML+=row
      });});}
getData();

function redirectToRoom(name){
      console.log("name:"+name)
      localStorage.setItem("roomEntered",name)
      window.location="kwitter_message.html"
}
function logout(){
      localStorage.removeItem("name")
      localStorage.removeItem("roomEntered")
      window.location="index.html"
  }