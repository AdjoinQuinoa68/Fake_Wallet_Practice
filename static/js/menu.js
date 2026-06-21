
$("#userLogoffButton").on("click", userLogoff);

currentUserUsername = localStorage.getItem("currentUserUsername")

function userLogoff() {
  localStorage.setItem("currentUserUsername", "");
  window.location.assign("index.html");
}

function readCurrentUser(username) {
  return JSON.parse(localStorage.getItem("userList")).filter((user => user.username == username))[0];
}

$("#menuTitle").text(`Bienvenido, ${currentUserUsername}!`);
$("#currentBalance").text(`$ ${readCurrentUser(currentUserUsername).money} CLP`);
