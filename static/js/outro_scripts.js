function User(username) {
  this.username = username;
  this.money = 0;

  this.deposit = function(amount) {
    this.money += amount;
  }
  this.transfer = function(amount) {
    this.money -= amount;
  }
};

function setUsername() {
  const usernameInputField = document.getElementById("usernameInputField").value;
  const userList = localStorage.getItem("userList");

  window.localStorage.setItem("currentUser", usernameInputField);
  window.location.assign("menu.html");
};

function setUsernameAnonymous() {
  window.localStorage.setItem("currentUser", "Anónimo");
  window.location.assign("menu.html");
};

function userLogoff() {
  localStorage.setItem("currentUser", "");
  window.location.assign("index.html");
};

function welcomeUserInTheMenuTitle() {
  const currentUser = localStorage.getItem("currentUser");

  if (currentUser != "Anónimo") {
    document.getElementById("menuTitle").innerHTML = "<h2 id='menuTitle'>Bienvenido, " + currentUser + "!</h2>";
  }
};

function createDummyUser() {
  const userList = localStorage.getItem("userList");

  if (!userList) {
    const dummyUser = new User("Joaquín Díaz");
  }
}