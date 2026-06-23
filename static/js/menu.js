
$("#userLogoffButton").on("click", userLogoff);

const currentUserUsername = localStorage.getItem("currentUserUsername");
let userList = JSON.parse(localStorage.getItem("userList"));

function userLogoff() {
  localStorage.setItem("currentUserUsername", "");
  window.location.assign("index.html");
}

$("#menuTitle").text(`Bienvenido, ${currentUserUsername}!`);
$("#currentBalance").text(`$ ${userList[currentUserUsername].money} CLP`);
