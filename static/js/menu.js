
function userLogoff() {
  localStorage.setItem("currentUser", "");
  window.location.assign("index.html");
};

function welcomeUserInTheMenuTitle() {
  const currentUser = localStorage.getItem("currentUser");
  document.getElementById("menuTitle").innerHTML = "<h2 id='menuTitle'>Bienvenido, " + currentUser + "!</h2>";
};