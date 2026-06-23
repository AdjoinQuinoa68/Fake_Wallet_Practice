
$("#userLogoffButton").on("click", userLogoff);

const currentUserUsername = localStorage.getItem("currentUserUsername");
let userList = JSON.parse(localStorage.getItem("userList"));

function userLogoff() {
  localStorage.setItem("currentUserUsername", "");
  window.location.assign("index.html");
}

$("#menuTitle").text(`Bienvenido, ${currentUserUsername}!`);
$("#currentBalance").text(`$ ${userList[currentUserUsername].money} CLP`);

function depositMoney() {
  const amount = parseInt(window.prompt("¿Cuánto dinero desea depositar?"));
  let userList = JSON.parse(localStorage.getItem("userList"));

  if (amount > 0) {
    userList[currentUserUsername].money += amount;
    localStorage.setItem("userList", JSON.stringify(userList));
    window.alert(`¡$ ${amount} CLP depositados exitósamente!
    Su nuevo saldo es $ ${userList[currentUserUsername].money} CLP`);
    window.location.reload();
    return 0
  } else if ((Number.isNaN(amount))) {
    window.alert("Ingrese un número e intente de nuevo.");
    return 3;
  } else if (amount < 0) {
    window.alert("Valor no puede ser negativo. Intente de nuevo");
    return 2;
  } else {
    window.alert("Ha ocurrido un error. Intentelo más tarde o contacte a soporte.");
    return 1;
  }
}

function transferMoney() {
  let userList = JSON.parse(localStorage.getItem("userList"));
  const targetUser = window.prompt(`Escriba el nombre de usuario de la persona a quien busca transferir.\n
  Lista de usuarios:
- ${Object.keys(userList).reduce((list, username) => list + "\n- " + username)}`);
  const amount = parseInt(window.prompt("¿Cuánto dinero desea transferir?"));

  if (!targetUser) {
    window.alert("Por favor ingrese un nombre de usuario e intente nuevamente");
    return 31;
  } else if (!(Object.keys(userList).includes(targetUser))) {
    console.log(targetUser);
    console.log(userList);
    console.log(Object.keys(userList));
    window.alert("Este usuario no existe. Intente nuevamente");
    return 30; 
  } else if (amount > 0) {
    userList[currentUserUsername].money -= amount;
    userList[targetUser].money += amount;
    localStorage.setItem("userList", JSON.stringify(userList));
    window.alert(`¡$ ${amount} CLP transferidos a ${targetUser} exitósamente!
    Su nuevo saldo es $ ${userList[currentUserUsername].money} CLP`);
    window.location.reload();
    return 0
  } else if (Number.isNaN(amount)) {
    window.alert("Ingrese un número e intente nuevamente.");
    return 21;
  } else if (amount < 0) {
    window.alert("Valor no puede ser negativo. Intente nuevamente");
    return 20;
  } else if (userList[currentUserUsername].money < amount) {
      window.alert("No tiene suficientes fondos para transferir.");
      return 22;
  } else {
    window.alert("Ha ocurrido un error. Intentelo más tarde o contacte a soporte.");
    return 1;
  }
}


