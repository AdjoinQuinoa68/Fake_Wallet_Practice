
function setUsername() {
    const usernameInputField = document.getElementById("usernameInputField").value;
    window.localStorage.setItem("currentUser", usernameInputField);
    window.location.assign("menu.html");
};

function setUsernameAnonymous() {
    window.localStorage.setItem("currentUser", "Anónimo");
    window.location.assign("menu.html");
};

function changeTheme() {
    const htmlElement = document.querySelector("html");
    const currentTheme = htmlElement.getAttribute("data-bs-theme");
    
    if (currentTheme == "dark") {
        htmlElement.setAttribute("data-bs-theme", "light");
        window.localStorage.setItem("savedTheme", "light");
    } else {
        htmlElement.setAttribute("data-bs-theme", "dark");
        window.localStorage.setItem("savedTheme", "dark");
    }
};

function userLogoff() {
    localStorage.setItem("currentUser", "");
    window.location.assign("index.html");
};

function welcomeUserInTheMenuTitle() {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser != "Anónimo") {
        document.getElementById("menuTitle").innerHTML = "<h2 id='menuTitle'>Bienvenido, " + currentUser +"!</h2>";
    }
};

welcomeUserInTheMenuTitle();