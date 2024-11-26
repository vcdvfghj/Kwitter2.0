function addUser(){
    username=document.getElementById("name").value
    localStorage.setItem("name",username)
    window.location="kwitter_room.html"
}