
$("#usernameFormButton").on("click", handleLogin);

class User {
  constructor(username, money = 0) {
    this.username = username;
    this.money = money;
    this.transactions = [];
  }

  depositMoney(depositAmount) {
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
  }

  transferMoney(transferAmount) {
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
  }
};

// If no userList exist: create dummy user and set userList.
// Should only need to run the very first time a user visits the site.
$(document).ready(() => {
  if (!(localStorage.getItem("userList"))) {
    const userList = JSON.stringify([(new User("Joaquín Díaz", 1337))]);
    localStorage.setItem("userList", userList);
  }
});


function handleLogin() {
  const username = $("#usernameInputField").val();
  console.log(username);
  const userList = JSON.parse(localStorage.getItem("userList"));

  let isUserInUserList = userList.forEach(element => {
    if (username == element.username) {
      return true;
    } else {
      return false;
    }
  });

  if (!username) {
    console.log("Username field empty");
  } else if (isUserInUserList == true) {
    console.log("Username valid. Loging in...");
    localStorage.setItem("currentUser", username);
    window.location.assign("menu.html");
  } else {
    console.log("Username NOT in userList");
    // prompt to create new user
    // new user object gets pushed into the userList array
    // and into localStorage
    
  }
  console.log(username);
  console.log(isUserInUserList);
}