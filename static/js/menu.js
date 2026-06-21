
$("#userLogoffButton").on("click", userLogoff);

function userLogoff() {
  localStorage.setItem("currentUserUsername", "");
  window.location.assign("index.html");
}

const currentUserUsername = localStorage.getItem("currentUserUsername");
const currentUser = JSON.parse(localStorage.getItem("userList")).filter((user => user.username == currentUserUsername))[0];
const currentUserBalance = currentUser.money;
console.log(currentUserBalance)

$("#menuTitle").text(`Bienvenido, ${currentUserUsername}!`);
$("#currentBalance").text(`$ ${currentUserBalance} CLP`);

/*
function updateUserList() {
  localStorage.setItem("userList", userList);
}
*/
