function test(arg) {
  el = document.getElementById(`${arg}-window`);
  mainContainer = document.getElementById("main-container");
  if (el.classList.contains(`${arg}collapsed`)) {
    document.getElementById("signin-window").classList.remove("signinwindow");
    document.getElementById("signup-window").classList.remove("signupwindow");
    document.getElementById("signin-window").classList.add("signincollapsed");
    document.getElementById("signup-window").classList.add("signupcollapsed");
    el.classList.toggle(`${arg}window`);
    el.classList.toggle(`${arg}collapsed`);
    document.getElementById(`${arg}form`).reset();
    mainContainer.style.opacity = "0.7";
    document.getElementById("tutorial-list-box").style = "pointer-events: none";
  } else {
    el.classList.toggle(`${arg}window`);
    el.classList.toggle(`${arg}collapsed`);
    mainContainer.style.opacity = "1";
    document.getElementById(`${arg}form`).reset();
    document.getElementById("tutorial-list-box").removeAttribute("style");
  }
}

function submit() {
  document.getElementById("signinform").submit();
}

function delet() {
  const signin = document.getElementById("signin-window");
  const signup = document.getElementById("signup-window");
  if (
    event.target !== document.getElementById("signin-btn") &&
    event.target !== document.getElementById("signup-btn") &&
    (signin.classList.contains("signinwindow") ||
      signup.classList.contains("signupwindow"))
  ) {
    // console.log("kek");
    signin.classList.remove("signinwindow");
    signup.classList.remove("signupwindow");
    signin.classList.add("signincollapsed");
    signup.classList.add("signupcollapsed");
    mainContainer.style.opacity = "1";
    document.getElementById(`signinform`).reset();
    document.getElementById(`signupform`).reset();
    document.getElementById("tutorial-list-box").removeAttribute("style");
  }
}

//modal

window.onload = function () {
    document.getElementById('button').addEventListener("click", function () {
        document.querySelector('.bg-modal').style.display = "flex";
    });
    document.querySelector('.close').addEventListener("click", function () {
        document.querySelector('.bg-modal').style.display = "none";
    })
}
