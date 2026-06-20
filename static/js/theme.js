
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

function loadTheme() {
  const htmlElement = document.querySelector("html");
  const currentTheme = localStorage.getItem("savedTheme");

  if (currentTheme == "light") {
    htmlElement.setAttribute("data-bs-theme", "light");
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
  }
};

loadTheme();