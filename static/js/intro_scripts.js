function skipLoginIfAlreadyLoggedIn() {
  const currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    window.location.assign("menu.html");
  }
};

function forceLoginIfNotLoggedIn() {
  const currentUser = localStorage.getItem("currentUser");

  if (!currentUser) {
    window.location.assign("index.html");
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