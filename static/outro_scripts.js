
function setUsername() {
    const usernameInputField = document.getElementById("usernameInputField").value;
    window.localStorage.setItem("username", usernameInputField);
    window.location.assign("menu.html");
};

function setUsernameAnonymous() {
    window.localStorage.setItem("username", "Anónimo");
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
    localStorage.setItem("username", "");
    window.location.assign("index.html");
};

function welcomeUserInTheMenuTitle() {
    const username = localStorage.getItem("username");

    if (username != "Anónimo") {
        document.getElementById("menuTitle").innerHTML = "<h2 id='menuTitle'>Bienvenido, " + username +"!</h2>";
    }
};

welcomeUserInTheMenuTitle();