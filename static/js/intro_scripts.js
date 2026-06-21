function skipLoginIfAlreadyLoggedIn() {
  const currentUserUsername = localStorage.getItem("currentUserUsername");

  if (currentUserUsername) {
    window.location.assign("menu.html");
  }
};

function forceLoginIfNotLoggedIn() {
  const currentUserUsername = localStorage.getItem("currentUserUsername");

  if (!currentUserUsername) {
    window.location.assign("index.html");
  }
};