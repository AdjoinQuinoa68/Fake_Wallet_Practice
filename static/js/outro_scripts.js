function User(username) {
  this.username = username;
  this.money = 0;

  this.deposit = function(depositAmount) {
    let amount = depositAmount.parseInt();
    if (amount > 0) {
      this.money += amount;
      return 0
    } else if (amount.isNan()) {
      console.log("NaN (deposit)");
      return 3;
    } else if (amount < 0) {
      console.log("Value can't be negative (deposit)");
      return 2;
    } else {
      console.log("Unknown Error (deposit)");
      return 1;
    }
  };

  this.transfer = function (transferAmount) {
    let amount = depositAmount.parseInt();
    if (amount > 0) {
      this.money -= amount;
      return 0
    } else if (amount.isNan()) {
      console.log("NaN (transfer)");
      return 3;
    } else if (amount < 0) {
      console.log("Value can't be negative (transfer)");
      return 2;
    } else {
      console.log("Unknown Error (transfer)");
      return 1;
    }
  };
};

function setUsername() {
  const usernameInputField = document.getElementById("usernameInputField").value;
  const userList = localStorage.getItem("userList");

  window.localStorage.setItem("currentUser", usernameInputField);
  window.location.assign("menu.html");
};

function userLogoff() {
  localStorage.setItem("currentUser", "");
  window.location.assign("index.html");
};

function welcomeUserInTheMenuTitle() {
  const currentUser = localStorage.getItem("currentUser");
  document.getElementById("menuTitle").innerHTML = "<h2 id='menuTitle'>Bienvenido, " + currentUser + "!</h2>";
};

function createDummyUser() {
  const userList = localStorage.getItem("userList");

  if (!userList) {
    const dummyUser = new User("Joaquín Díaz");
  }
}