function addUser(){
   user_name = document.getElementById("user_name");
   password = document.getElementById("password");

   localStorage.setItem("user_name", user_name);
   localStorage.setItem("password", password);

   window.location = "kwitter_room.html";

}