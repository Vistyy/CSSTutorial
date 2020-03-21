function test() {
  el = document.getElementById("login-window");
  mainContainer = document.getElementById("main-container");
  if (el.classList.contains("collapsed")) {
    el.classList.toggle("loginwindow");
    el.classList.toggle("collapsed");
    mainContainer.style.opacity = "0.7";
  } else {
    el.classList.toggle("loginwindow");
    el.classList.toggle("collapsed");
    mainContainer.style.opacity = "1";
  }
}

function submit() {
  document.getElementById("loginform").submit();
}
