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