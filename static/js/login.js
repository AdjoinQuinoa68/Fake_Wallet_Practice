
$("#usernameFormButton").on("click", handleLogin);

class User {
  constructor(money = 0) {
    this.money = money;
    this.transactions = [];
  }

  depositMoney(depositAmount) {
    this.money += depositAmount;
  }

  transferMoney(transferAmount) {
    if (transferAmount > this.money) {
      console.log("Not enough funds");
    } else {
      this.money -= transferAmount;
    }
  }
};

// Initializes userList if no user exists yet.
$(document).ready(() => {
  if (!(localStorage.getItem("userList"))) {
    const initialUserList = JSON.stringify({"dummy": new User(1337), "Joaquin": new User(20000)});
    localStorage.setItem("userList", initialUserList);
  }
});

function handleLogin() {
  const username = $("#usernameInputField").val();
  const userList = JSON.parse(localStorage.getItem("userList"));

  if (!username) {
    console.log("Username field empty");
  } else if (username in userList) {
    console.log("Username valid. Loging in...");
    localStorage.setItem("currentUserUsername", username);
    window.location.assign("menu.html");
  } else {
    console.log("Username NOT in userList");
    if (window.confirm("Este usuario no existe. ¿Desea crear uno nuevo?")) {
      const newUserList = Object.assign(userList, {[username]: new User(500)});
      console.log(newUserList);
      localStorage.setItem("userList", JSON.stringify(newUserList));
      localStorage.setItem("currentUserUsername", username);
      window.location.assign("menu.html");
    }
  }
}